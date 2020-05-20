import { PostsService } from './../shared/services/posts.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  posts$: Observable<any>;
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAll();
  }

}
