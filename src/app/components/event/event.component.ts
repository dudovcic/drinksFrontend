import { Component, Input, OnInit } from '@angular/core';

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
  	this.event.time = new Date(this.event.time).toString(); 
  }
}
