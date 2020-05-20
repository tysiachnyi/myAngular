import {PostsService} from '../../shared/services/posts.service';
import {Observable, Subscription} from 'rxjs';
import {Component, OnInit} from '@angular/core';
import {Post} from 'src/app/shared/interfaces';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  posts: Post[] = [];
  pSub: Subscription;
  dSub: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.pSub = this.postsService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }

}
