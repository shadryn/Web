import { Component, OnInit } from 'angular2/core';
import {GuildRosterService}       from '../../services/guildroster/guildroster.service';
import {ObjToArr}       from './pipe.ts';


@Component({
  selector: 'guildroster',
  moduleId: 'components/guildroster/guildroster',
  template: require('./guildroster.html'),
  styles: [require('./guildroster.scss')],
  pipes: [ObjToArr]
})


export class GuildRosterComponent {

  public roster;
  public members;
  public raiders;
  public wowClass = ['','Warrior','Paladin','Hunter','Rogue','Priest','DeathKnight','Shaman','Mage','Warlock','Monk','Druid'];

  constructor(private _guildrosterService: GuildRosterService) {}

  errorMessage: string;

  ngOnInit() { this.getRoster(); }

  getRoster() {


    this._guildrosterService.getRoster().subscribe(
      data => {this.roster = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => this.parseRoster()
      );

  }

  parseRoster() {

    // only return raiders.. this is a pain..
    // rank 0 is guild leader
    // rank 1 is officers
    // rank 4 is veteran raiders
    // rank 5 is raiders
    this.raiders = this.roster.filter(function (el) {
      return el.rank == 0 || el.rank == 1 || el.rank == 4 || el.rank == 5 ;
    });

  }


}
