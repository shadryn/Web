import { Component, OnInit } from 'angular2/core';

@Component({
  selector: 'twitch',
  moduleId: 'components/twitch/twitch',
  template: require('./twitch.html'),
  styles: [require('./twitch.scss')]
})
export class TwitchComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {

  }
}
