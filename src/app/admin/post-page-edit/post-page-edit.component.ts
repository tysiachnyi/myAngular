import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-post-page-edit',
  templateUrl: './post-page-edit.component.html',
  styleUrls: ['./post-page-edit.component.scss']
})
export class PostPageEditComponent implements OnInit {
  public Editor = ClassicEditor;
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required)
    });
  }

  submit() {
    console.log('hi');
  }

}
