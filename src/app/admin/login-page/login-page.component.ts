import { AdminPageComponent } from '../admin-page/admin-page.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthService} from 'src/app/shared/services/auth.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {User} from 'src/app/shared/interfaces';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  message: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])

    });

  }

  checkLogin() {
    this.router.navigate(['/admin']);
  }
  submit(){
    if (this.form.invalid) {
      return;
    }

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    };
  }

}
