import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldService } from '../field.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  userForm: any = '';

  constructor(private fb: FormBuilder, private service: FieldService,private router:Router) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      enabled: [true],
      roles: [,Validators.required],
      personalInfoDTO: this.fb.group({
        emailId: ['', [Validators.required, Validators.email]],
        gender: [''],
        age: ['', Validators.min(18)],
        mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      }),
      addressDTO: this.fb.group({
        doorNo: [''],
        addrLine1: [''],
        addrLine2: [''],
        city: [''],
        district: [''],
        state: [''],
        country: [''],
      }),
    });
  }

  onSubmit() {
   
    if (this.userForm.valid) {
      let res = this.service
        .registerUser(this.userForm.value)
        .subscribe((response) => {
          
          if(response.statusCode==200) {
            this.router.navigate(["dashboard"])
            this.service.setUser(response.data);
          }

        });
    }
  }
}
