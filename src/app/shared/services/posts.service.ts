import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Post } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  jsonUrl = 'http://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.http.get(this.jsonUrl)
      .pipe(map((response: {[key: string]: any}) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key,
            date: new Date(response[key].date)
          }));
      }));
  }

  getById(id: string): Observable<Post> {
    console.log(`${this.jsonUrl}/${id}.json`);
    return this.http.get(`${this.jsonUrl}/${id}`)
      .pipe(map((post: Post) => {
        return {
          ...post, id,
          date: new Date(post.date)
        };
      }));
  }
}
