import { ActivatedRoute, Router, Routes } from '@angular/router';
import { FieldService } from './../field.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm: any={};
  returnUrl: any;

  

  constructor(private fb: FormBuilder
    ,private service:FieldService
    ,private router:ActivatedRoute
    ,private route:Router) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    if(sessionStorage.getItem("currentUser")){ this.route.navigate(['/']);
    this.router.queryParams.subscribe( params => {
      this.returnUrl = params['returnUrl'] || '/';
    }
    )}
    
  }
 

  signIn() {
    if (this.signInForm.valid) {
      this.service.signIn(this.signInForm.value).subscribe(() => {
        this.route.navigateByUrl(this.returnUrl);
        this.route.navigate(["/dashboard"])
      
      }
      )
    }
  }

}
