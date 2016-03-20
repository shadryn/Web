import { Component, OnInit } from 'angular2/core';
import { LogsComponent } from '../logs/logs';
import { TwitchComponent } from '../twitch/twitch';

import { Boss } from '../../interfaces/boss';
import { ProgressionService } from '../../services/progression/progression';

@Component({
  selector: 'raiding',
  moduleId: 'components/raiding/raiding',
  template: require('./raiding.html'),
  styles: [require('./raiding.scss')],
  providers: [ProgressionService],
  directives: [
    LogsComponent,
    TwitchComponent
  ]
})
export class RaidingComponent implements OnInit {
  bosses: Boss[];

  constructor(
    private _ProgressionService: ProgressionService) {
  }

  ngOnInit() {
    this.getBosses();
  }

  getBosses() {
    this._ProgressionService.getBosses().then(bosses => this.bosses = bosses);
  }
}
