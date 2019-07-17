import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/getComment');
  }

  public comments = [];

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
}
