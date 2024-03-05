import { ActivatedRoute, Router, Routes } from '@angular/router';
import { FieldService } from './../field.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  signInForm: any = {};
  returnUrl: any;

  constructor(
    private fb: FormBuilder,
    private service: FieldService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    if (this.service.getUser() != null) {
      this.route.navigate(['/']);
    }
  }

  signIn() {
    if (this.signInForm.valid) {
      this.service.signIn(this.signInForm.value).subscribe((response) => {
        if (response['statusCode'] == 200) {
          let currentUser = response['data'];
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          if (localStorage.getItem('currentUser'))
            this.route.navigate(['/dashboard']);
          this.service.setUser(currentUser);
        }
      });
    }
  }
}
