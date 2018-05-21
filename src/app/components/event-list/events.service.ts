import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../../interfaces/event';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EventsService {
  ROOT_URL = 'https://mock-api.drinks.test.siliconrhino.io';
  events: Event[];
  constructor(private http: HttpClient) {
    this.getEvents();
  }

  fetchEvents(search: string = ''): Observable<Object> {
    return this.http.get(this.ROOT_URL + '/events?search=' + search)
  }

  getEvents(search?: string): void {
    this.fetchEvents(search)
      .subscribe(events => {
        this.events = <Event[]>events;
      })
  }
}
