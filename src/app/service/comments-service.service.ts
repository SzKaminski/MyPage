import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {Comment} from '../comments/comments.component';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {
  }
  public comments = [];

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/getComment');
  }
  getComment(): Observable<any> {
    return this.http.get('//localhost:8080/getListOfComments')
      .pipe(
        map((data: any[]) => {
          return this.comments = data;
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      );
  }

  postComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>('//localhost:8080/postComment', comment, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
