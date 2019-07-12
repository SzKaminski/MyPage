import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHandler, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get('//localhost:8080/getComment');
  }
  
}
