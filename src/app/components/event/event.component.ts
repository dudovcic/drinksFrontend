import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  @Input() event;
  eventType: string;
  openComments: boolean = false;

  toggleComments() {
    this.openComments = !this.openComments;
  }
}
