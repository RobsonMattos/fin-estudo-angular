import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';
import { Entry } from './entry.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiPath = 'api/categories';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Entry[]> {
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategories)
    );
  }

  getById(id: number): Observable<Entry> {
    const url = `${this.apiPath}/${id}`;

    return this.http.get(url).pipe(
      map(this.jsonDataToCategory.bind(this)),
      catchError(this.handleError)
    );
  }

  create(category: Entry): Observable<Entry> {
    return this.http.post(this.apiPath, category).pipe(
      map(this.jsonDataToCategory.bind(this)),
      catchError(this.handleError)
    );
  }

  update(entry: Entry): Observable<Entry> {
    const url = `${this.apiPath}/${entry.id}`;

    return this.http.put("sdad", entry).pipe(
      map(() => entry),
      catchError(this.handleError)
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiPath}/${id}`;

    return this.http.delete(url).pipe(
      map(() => null),
      catchError(this.handleError)
    );
  }

  private jsonDataToCategories(jsonData: any[]): Entry[] {
    const categories: Entry[] = [];
    jsonData.forEach(
      element => categories.push( element as Entry )
    );
    return categories;
  }

  protected jsonDataToCategory(jsonData: any): Entry {
    return jsonData as Entry;
  }

  private handleError(error: any): Observable<any> {
    console.log('ERRO NA REQUISIÇÃO => ', error);
    return throwError(error);
  }

}
