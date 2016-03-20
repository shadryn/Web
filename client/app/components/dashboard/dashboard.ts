import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Hero } from '../../interfaces/hero';
import { GuildService } from '../../services/guild/guild';

@Component({
  selector: 'my-dashboard',
  moduleId: 'components/dashboard/dashboard',
  template: require('./dashboard.html'),
  styles: [require('./dashboard.css')]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
    private _router: Router,
    private _GuildService: GuildService) {
  }
  ngOnInit() {
    this._GuildService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }
  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
  }
}
