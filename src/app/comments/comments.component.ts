import {Component, OnInit} from '@angular/core';
import {CommentsService} from '../service/comments-service.service';
import {DatePipe} from '@angular/common';

// @ts-ignore
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [DatePipe]
})
export class CommentsComponent implements OnInit {
  public comments: Array<Comment>;
  private comment: Comment;
  myDate = new Date();

  public commentRes: Comment;
  public authorName: string;
  public content: string;

  constructor(public commentsService: CommentsService) {
  }

  ngOnInit() {
    this.commentsService.getComment().subscribe(data => {
      this.comments = data;
      console.log(this.comments);
    });
  }

  setAuthorName(value: string) {
    this.authorName = value;
  }

  setContent(value: string) {
    this.content = value;
  }

  save() {
    this.comment = {
      authorName: this.authorName,
      content: this.content,
      date: this.myDate,
    };
    this.commentsService.postComment(this.comment).subscribe(data => {
      this.commentRes = data;
      console.log(data);
    });
  }
}

export class Comment {

  authorName: string;
  content: string;
  date: Date;

}

