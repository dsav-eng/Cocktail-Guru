import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCocktailComponent } from './find-cocktail.component';

describe('FindCocktailComponent', () => {
  let component: FindCocktailComponent;
  let fixture: ComponentFixture<FindCocktailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCocktailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
