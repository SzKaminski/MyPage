import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CommentsService} from '../service/comments-service.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  public comments: Array<Comment>;
  constructor(public commentsService: CommentsService) {
  }

  ngOnInit() {
    this.commentsService.getComment().subscribe(data => {
      this.comments = data;
      console.log(this.comments);
    });
  }
}

export interface Comment {

  authorName: string;
  content: string;
  date: Date;

}

