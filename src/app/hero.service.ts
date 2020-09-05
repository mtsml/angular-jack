import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroUrl = 'api/heroes';

  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private http: HttpClient,
    private messageService: MessagesService
  ) { }
    
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroUrl)
      .pipe(
          tap(heroes => this.log("fetched heroes")),
          catchError(this.handleError<Hero[]>('getHeroes', []))
      )
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
    )
  }

  updateHero(hero: Hero): Observable<any> {
      return this.http.put(this.heroUrl, hero, this.httpOptions).pipe(
          tap(_ => this.log(`update hero id=${hero.id}`)),
          catchError(this.handleError<any>('updateHero'))
      )
  }

  addHero(hero: Hero): Observable<Hero> {
      return this.http.post<Hero>(this.heroUrl, hero, this.httpOptions).pipe(
          tap((newHero: Hero) => this.log(`add hero w/ id=${newHero.id}`)),
          catchError(this.handleError<Hero>('addHero'))
      );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
      const id = typeof hero === 'number' ? hero : hero.id;
      const url = `${this.heroUrl}/${id}`;

      return this.http.delete<Hero>(url, this.httpOptions).pipe(
          tap(_ => this.log(`deleted hero id=${id}`)),
          catchError(this.handleError<Hero>('deleteHero'))
      );
  }

  searchHeroes(term: string): Observable<Hero[]> {
      if (!term.trim()) {
          return of([])
      }
      return this.http.get<Hero[]>(`${this.heroUrl}/?name=${term}`).pipe(
          tap(_ => this.log(`found heroes matching "${term}"`)),
          catchError(this.handleError<Hero[]>('searchHeroes', []))
      );
  }

  private log(message: string) {
      this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', reuslt?: T) {
      return (error: any): Observable<T> => {
          console.error(error)
          this.log(`${operation} failed: ${error.message}`);
          return of(reuslt as T);
      }
  }
}