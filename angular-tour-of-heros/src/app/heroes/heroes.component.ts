import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
import {HeroService} from '../hero.service'
import {MessageService} from "../message.service"
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService,
              private messageService: MessageService
              ) { }
  heroes: Hero[] = [];
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes= heroes);
  }
  curHero?: Hero;
 
  ngOnInit(): void {
    this.getHeroes();
  }
  
  onSelect(hero:Hero){
    this.messageService.add(`HeroesComponent: Selected Hero id= ${hero.id}. name = ${hero.name}`)
    this.curHero = hero;
  }


}
