import { Component, OnInit, Input } from '@angular/core';
import { EventComment } from '../../interfaces/event-comment';
import * as moment from 'moment';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comments: EventComment[];
  constructor() {
  	console.log("Coments", this.comments);
  }

  ngOnInit() {
  	this.comments = this.comments.map(comment=> {
  		comment.timestamp = moment(comment.timestamp).format("LLLL");
  		return comment;
  	})
  }

}
