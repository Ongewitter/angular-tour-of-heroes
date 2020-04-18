import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes'

  constructor(private messageService: MessageService,
              private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: Send message after fetching :kappa:
    this.messageService.add('HeroService: Fetched Heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: Send message after fetching :kappa:
    this.messageService.add(`HeroService: Fetched Hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  private log(message: string){
    this.messageService.add(`HeroService: $(message)`);
  }
}
