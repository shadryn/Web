import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { TheGuildComponent } from '../the-guild/the-guild';
import { RaidingComponent } from '../raiding/raiding';
import { EventsComponent } from '../events/events';
import { JoinComponent } from '../join/join';

@Component({
  selector: 'home',
  moduleId: 'components/home/home',
  template: require('./home.html'),
  styles: [require('./home.scss')],
  directives: [
    TheGuildComponent,
    RaidingComponent,
    EventsComponent,
    JoinComponent
  ]
})
export class HomeComponent implements OnInit {
  constructor(
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let sectionKey = this._routeParams.get('sectionKey');
    console.log('sectionkey', sectionKey);
  }
}
