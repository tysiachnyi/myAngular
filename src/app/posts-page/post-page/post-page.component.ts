import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service';
import { Observable } from 'rxjs';
import { Post } from '../../shared/interfaces';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  post$: Observable<Post>;
  userId: string;

  constructor(
    private postsService: PostsService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.post$ = this.router.params
      .pipe(switchMap((params: Params) => {
        return this.postsService.getById(params.id);
      }));
  }

}
