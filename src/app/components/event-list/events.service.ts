import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../../interfaces/event';

@Injectable()
export class EventsService {
  ROOT_URL = 'https://mock-api.drinks.test.siliconrhino.io';
  events: Event[];
  constructor(private http: HttpClient) {
    this.getEvents();
  }

  fetchEvents(search: string = '') {
    return this.http.get(this.ROOT_URL + '/events?search=' + search)
  }

  getEvents(search?: string) {
    this.fetchEvents(search)
      .subscribe(events => {
      this.events = (<Event[]>events).map(event => {
        event.time = ''+new Date(event.time);
        return event;
      });
      }) // would do map here, but Typescript seems not to like it
  }
}
