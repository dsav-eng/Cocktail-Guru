import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CocktailService } from '../cocktail-service.service';
import { Cocktail } from '../cocktail';

@Component({
  selector: 'app-show-cocktail',
  templateUrl: './show-cocktail.component.html',
  styleUrls: ['./show-cocktail.component.css'],
})
export class ShowCocktailComponent implements OnInit {
  cocktailID: string = 'lookup.php?i='; // to make the HTTP call
  cocktail; // to store the cocktail that user has selected from presented options
  show: boolean = true;

  @Input() resByIng: Observable<any>;

  constructor(
    private cocktailServ: CocktailService,
  ) {}

  ngOnInit(): void {}

  //subscribding the the observable received from the HTTP call and
  //creating an instance of a coctail that user has selected
  onCocktailSelect(id) {
    this.cocktailID += id;
    console.log('this is id selected: ', this.cocktailID);

    this.cocktailServ.getDataFromServer(this.cocktailID.toString()).subscribe(
      (response) => {
        this.cocktail = new Cocktail();
        this.cocktail.setName(response);
        this.cocktail.setIngridients(response);
        this.cocktail.setMeasures(response);
        this.cocktail.setInstructions(response);
        this.cocktail.setImage(response);
      },
      (error) => 'The request to server failed'
    );

    this.cocktailID = 'lookup.php?i=';
    this.show = false;
  }
  hide() {
    this.show = true;
    this.cocktail = null;
  }
}
