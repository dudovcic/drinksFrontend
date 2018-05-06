import { Component, OnInit, Input } from '@angular/core';
import { EventComment } from '../../interfaces/event-comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comments: EventComment;
  constructor() { }

  ngOnInit() {
  }

}
