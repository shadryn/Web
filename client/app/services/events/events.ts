import {Injectable} from 'angular2/core';
import {Event} from '../../interfaces/event';
import {EVENTS} from './mock-events';

@Injectable()
export class EventsService {
  getEvents() {
    return Promise.resolve(EVENTS);
  }

  getEvent(id: number) {
    return Promise.resolve(EVENTS).then(
      events => events.filter(event => event.id === id)[0]
    );
  }
}
