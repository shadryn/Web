import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

@Component({
  selector: 'the-guild',
  moduleId: 'components/the-guild/the-guild',
  template: require('./the-guild.html'),
  styles: [require('./the-guild.scss')]
})
export class TheGuildComponent implements OnInit {
  constructor(
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let sectionKey = this._routeParams.get('sectionKey');
    console.log(sectionKey);
  }
}
