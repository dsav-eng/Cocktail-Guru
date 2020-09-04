import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCocktailComponent } from './display-cocktail.component';

describe('DisplayCocktailComponent', () => {
  let component: DisplayCocktailComponent;
  let fixture: ComponentFixture<DisplayCocktailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCocktailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
