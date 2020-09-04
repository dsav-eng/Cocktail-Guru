import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail-service.service';
import { ingrideint } from '../ingridient';

@Component({
  selector: 'app-find-cocktail',
  templateUrl: './find-cocktail.component.html',
  styleUrls: ['./find-cocktail.component.css']
})
export class FindCocktailComponent implements OnInit {
 //placeholder for response from the server
 searchResults;

 ingridients: ingrideint[] = [
   {
     name: 'Vodka',
     image: 'https://www.thecocktaildb.com/images/ingredients/vodka-Small.png',
   },
   {
     name: 'Rum',
     image: 'https://www.thecocktaildb.com/images/ingredients/rum-Small.png',
   },
   {
     name: 'Gin',
     image: 'https://www.thecocktaildb.com/images/ingredients/gin-Small.png',
   },
   {
     name: 'Tequila',
     image:
       'https://www.thecocktaildb.com/images/ingredients/Tequila-Small.png',
   },
   {
     name: 'Beer',
     image: 'https://www.thecocktaildb.com/images/ingredients/Beer-Small.png',
   },
   {
     name: 'Whiskey',
     image:
       'https://www.thecocktaildb.com/images/ingredients/Whiskey-Small.png',
   },
   {
     name: 'Champagne',
     image:
       'https://www.thecocktaildb.com/images/ingredients/Champagne-Small.png',
   },
   {
     name: 'Brandy',
     image:
       'https://www.thecocktaildb.com/images/ingredients/Brandy-Small.png',
   },
   {
     name: 'Corona',
     image:
       'https://www.thecocktaildb.com/images/ingredients/Corona-Small.png',
   },
   {
     name: 'Sambuca',
     image:
       'https://www.thecocktaildb.com/images/ingredients/Sambuca-Small.png',
   },
   {
     name: 'Cognac',
     image:
       'https://www.thecocktaildb.com/images/ingredients/Cognac-Small.png',
   },
   {
     name: 'Advocaat',
     image:
       'https://www.thecocktaildb.com/images/ingredients/Advocaat-Small.png',
   },
 ];

 three: number = 3;

 //ingridient that user selects
 ingridient: string = 'filter.php?i=';

 //flag used to hide/show cocktail options (on user select)
 show: boolean = true;

 constructor(private cocktailService: CocktailService) {}

 ngOnInit(): void {}

 searchByIngridient(value: string): void {
   this.ingridient += value;
   console.log('now the full string', this.ingridient);

   this.cocktailService.getDataFromServer(this.ingridient).subscribe(
     (response) => {
       console.log('I recevied response from server in net line :');
       this.searchResults = response;
       console.log(this.searchResults);
     },
     (error) => 'The request to server failed'
   );

   this.ingridient = 'filter.php?i=';

   this.hide();
 }

 // to hide/show the list of options and cocktail selected:
 hide() {
   this.show = !this.show;
 }
}