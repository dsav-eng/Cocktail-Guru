import { baseOptions } from './../ingridient';
import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail-service.service';

@Component({
  selector: 'app-find-cocktail',
  templateUrl: './find-cocktail.component.html',
  styleUrls: ['./find-cocktail.component.css'],
})
export class FindCocktailComponent implements OnInit {
  searchResults;
  private ingridient: string = 'filter.php?i=';
  show: boolean = true;
  readonly bases = baseOptions;

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {}

  searchByIngridient(value: string): void {
    if (this.tileHasSpace(value)) this.refactorTitlteWithSpace(value);

    this.ingridient += value;
    this.cocktailService.getDataFromServer(this.ingridient).subscribe(
      (response) => {
        this.searchResults = response;
      },
      (error) => 'The request to server failed'
    );
    this.ingridient = 'filter.php?i=';
    this.hide();
  }
  hide() {
    this.show = !this.show;
  }

  tileHasSpace(cocktailTitle: string): boolean{
    return (cocktailTitle.includes(' '))? true : false;
  }

  refactorTitlteWithSpace (cocktailTitle: string) : string {
   return cocktailTitle.replace('', '%20');
  }
}
