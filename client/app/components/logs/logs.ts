import { Component, OnInit } from 'angular2/core';

@Component({
  selector: 'logs',
  moduleId: 'components/logs/logs',
  template: require('./logs.html'),
  styles: [require('./logs.scss')]
})
export class LogsComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {

  }
}
