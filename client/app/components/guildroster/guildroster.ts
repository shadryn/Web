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

  // arrays to map ids to text for class and race
  public wowClass = ['','Warrior','Paladin','Hunter','Rogue','Priest','DeathKnight','Shaman','Mage','Warlock','Monk','Druid'];
  public wowRace = ['0','Human','Orc','Dwarf','Night Elf','Undead','Tauren','Gnome','Troll','Goblin','Blood Elf','Draenei','12','13','14','15','16','17','18','19','20','21','Worgen','23','Pandaren','Pandaren','Pandaren'];


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

    return this.roster;

  }


}
