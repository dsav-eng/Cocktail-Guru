import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CocktailService } from '../cocktail-service.service';
import { Cocktail } from '../cocktail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-cocktail',
  templateUrl: './show-cocktail.component.html',
  styleUrls: ['./show-cocktail.component.css'],
})
export class ShowCocktailComponent implements OnInit {
  cocktailID: string = 'lookup.php?i='; // to make the HTTP call
  cocktail; // to store the cocktail that user has selected from presented options

  //flag used to hide/show cocktail options (on user select)
  show: boolean = true;

  @Input() resByIng: Observable<any>;

  constructor(
    private cocktailServ: CocktailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

  }

  //subscribding the the observable received from the HTTP call and
  //creating an instance of a coctail that user has selected
  onCocktailSelect(id) {
    this.cocktailID += id;
    console.log('this is id selected: ', this.cocktailID);

    this.cocktailServ.getDataFromServer(this.cocktailID.toString()).subscribe(
      (response) => {
        console.log('I recevied response from server in net line :');
        this.cocktail = new Cocktail();
        this.cocktail.setName(response);
        this.cocktail.setIngridients(response);
        this.cocktail.setMeasures(response);
        this.cocktail.setInstructions(response);
        this.cocktail.setImage(response);

        console.log('my object is: ', this.cocktail);
      },
      (error) => 'The request to server failed'
    );

    this.cocktailID = 'lookup.php?i=';
    this.show = false;
  }

  // to hide/show the list of options and cocktail selected:
  hide() {
    this.show = true;
    this.cocktail = null;
  }
}
