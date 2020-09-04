import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor(private http: HttpClient) {}

  //get method to retrive data from server when searching by ingridient
  getDataFromServer(url): Observable<any> {
    return this.http
      .get('https://www.thecocktaildb.com/api/json/v1/1/' + url)
      .pipe(
        map((res: any) => {
          return res.drinks;
        })
      );
  }
}
