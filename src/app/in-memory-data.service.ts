import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api/index';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        { id: 11, name: 'test1' },
        { id: 12, name: 'test2' },
        { id: 13, name: 'test3' },
        { id: 14, name: 'test4' },
        { id: 15, name: 'test5' },
        { id: 16, name: 'test6' },
        { id: 17, name: 'test7' },
        { id: 18, name: 'test8' },
        { id: 19, name: 'test9' },
        { id: 20, name: 'test10' }
    ];
    return {heroes}
  }

  genId(heroes: Hero[]): number {
      return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}