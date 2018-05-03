import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../../interfaces/event';

@Injectable()
export class EventsService {
  ROOT_URL = 'http://localhost:3000';
  events: Event[];
  constructor(private http: HttpClient) {
    this.getEvents();
  }

  fetchEvents(search: string = '') {
    return this.http.get(this.ROOT_URL + '/events?search=' + search)
  }

  getEvents(search?: string) {
    this.fetchEvents(search)
      .subscribe(events => {this.events = <Event[]>events; console.log(events)})
  }
}
