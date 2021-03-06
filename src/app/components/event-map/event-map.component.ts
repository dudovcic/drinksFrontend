import { Component, OnInit } from '@angular/core';
import { EventsService } from '../event-list/events.service';
import { EventLocation } from '../../interfaces/event-location';

@Component({
  selector: 'app-event-map',
  templateUrl: './event-map.component.html',
  styleUrls: ['./event-map.component.css']
})
export class EventMapComponent implements OnInit {
  
  latitude = 51.5074;
  longitude = 0.1278;
  zoom = 8;
  constructor( public eventsService: EventsService ) {}

  ngOnInit() {
  }

  setLocation(location: EventLocation) {
    this.latitude = location.latitude;
    this.longitude = location.longitude;
    this.zoom = 20;
  }

}
