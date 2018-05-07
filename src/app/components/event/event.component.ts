import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() event;
  eventType: string;
  openComments: boolean = false;

  toggleComments() {
    this.openComments = !this.openComments;
  }

  ngOnInit() {
  	this.event.time = moment(this.event.time).format("LLLL"); 
  }
}
