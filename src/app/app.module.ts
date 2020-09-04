import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FindCocktailComponent } from './find-cocktail/find-cocktail.component';
import { ShowCocktailComponent } from './show-cocktail/show-cocktail.component';
import { DisplayCocktailComponent } from './display-cocktail/display-cocktail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FindCocktailComponent,
    ShowCocktailComponent,
    DisplayCocktailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
