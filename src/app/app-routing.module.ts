import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroesComponent} from "./heroes/heroes.component";
import {DasboardComponent} from "./dasboard/dasboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {TopHeroesComponent} from "./top-heroes/top-heroes.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'heroes', component: HeroesComponent
  },
  {
    path: 'dashboard', component: DasboardComponent
  },
  {
    path: 'heroes/detail/:id', component: HeroDetailComponent
  },
  {
    path: 'top_heroes', component: TopHeroesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
