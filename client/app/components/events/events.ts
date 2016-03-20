import { Component, OnInit } from 'angular2/core';

import { Event } from '../../interfaces/event';
import { EventsService } from '../../services/events/events';

@Component({
  selector: 'events',
  moduleId: 'components/events/events',
  template: require('./events.html'),
  styles: [require('./events.scss')],
  providers: [EventsService]
})
export class EventsComponent implements OnInit {
  events: Event[];

  constructor(
    private _EventsService: EventsService) {
  }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this._EventsService.getEvents().then(events => this.events = events);
  }
}
