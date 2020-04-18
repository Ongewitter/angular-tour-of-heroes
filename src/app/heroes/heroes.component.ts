import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.setHeroes(this.getHeroes());
  }

  heroes: Hero[];

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => { this.heroes.push(hero); });
  }

  getHeroes(): Hero[] {
    let returnValue = null;
    this.heroService.getHeroes()
        .subscribe(heroes => returnValue = heroes);
    return returnValue;
  }

  setHeroes(heroes: Hero[]): void {
    this.heroes = heroes;
  }

}
