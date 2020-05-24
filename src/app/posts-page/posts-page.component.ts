import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/services/posts.service';
import { Observable } from 'rxjs';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {

  public Editor = ClassicEditor;
  posts$: Observable<any>;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
      this.posts$ = this.postsService.getAll();
  }

}
