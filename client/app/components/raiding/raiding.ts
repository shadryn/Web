import { Component, OnInit } from 'angular2/core';

import { Boss } from '../../interfaces/boss';
import { ProgressionService } from '../../services/progression/progression';

@Component({
  selector: 'raiding',
  moduleId: 'components/raiding/raiding',
  template: require('./raiding.html'),
  styles: [require('./raiding.scss')],
  providers: [ProgressionService]
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
