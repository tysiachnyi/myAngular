import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterContentChecked, AfterContentInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {ActivatedRoute, Params} from '@angular/router';
import {PostsService} from 'src/app/shared/services/posts.service';
import {switchMap} from 'rxjs/operators';
import {Post} from 'src/app/shared/interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-page-edit',
  templateUrl: './post-page-edit.component.html',
  styleUrls: ['./post-page-edit.component.scss']
})
export class PostPageEditComponent implements OnInit, AfterContentInit,  OnDestroy {
  @ViewChild('title') title: ElementRef;
  public Editor = ClassicEditor;
  form: FormGroup;
  post: Post;
  submitted = false;
  uSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    ) {}

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.postsService.getById(params.id);
      })
    ).subscribe((post: Post) => {
      this.post = post;
      this.form = new FormGroup({
        text: new FormControl(post.text, Validators.required),
        title: new FormControl(post.title, Validators.required),
      });
    });
  }



  ngOnDestroy() {
    if (this.uSub) {
      this.uSub.unsubscribe();
    }

  }

  submit() {
    console.log(document.getElementsByTagName('input')[0]);
    document.getElementsByTagName('input')[0].click();
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;
    this.uSub = this.postsService.update({
      ...this.post,
      title: this.form.value.title,
      text: this.form.value.text
    }).subscribe(() => {
      this.submitted = false;
    });
  }

  check() {
    this.title.nativeElement.
    document.getElementsByTagName('input')[0].click();
  }

}
