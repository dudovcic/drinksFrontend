import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { EventsService } from './events.service';
import { Event } from '../../interfaces/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {

  searchTimeout: any;
  searchTerm: string = '';

  @Output() clickEvent = new EventEmitter();

  constructor( public eventsService: EventsService) {}
  
  click(event: Event) {
    this.clickEvent.emit(event.location)
    //scroll(0, 0) - scroll to map when component is clicked, but it irritates UX a bit
  }

  onChange() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout =
      setTimeout(() => {
        this.eventsService.getEvents(this.searchTerm);
      }, 500)
  }

}
