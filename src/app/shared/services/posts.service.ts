import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  jsonUrl = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
