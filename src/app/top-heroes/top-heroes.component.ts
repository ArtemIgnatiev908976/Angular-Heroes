import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-heroes',
  templateUrl: './top-heroes.component.html',
  styleUrls: ['./top-heroes.component.css']
})

export class TopHeroesComponent implements OnInit {
  heroes!: Hero[]

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => {
      if (heroes.length){
        this.heroes = heroes.length < 5 ?  heroes : heroes.slice(0,3)
      }else {
        this.heroes = []
      }
    })
  }

  goToEditHero(heroId: number): void{
    this.router.navigate(['heroes','detail',heroId], {replaceUrl: true} )
  }

}
