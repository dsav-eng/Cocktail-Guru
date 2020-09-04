import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-cocktail',
  templateUrl: './display-cocktail.component.html',
  styleUrls: ['./display-cocktail.component.css']
})
export class DisplayCocktailComponent implements OnInit {

  @Input() cocktail;

  constructor() { }

  ngOnInit(): void {
    
    
  }

}
