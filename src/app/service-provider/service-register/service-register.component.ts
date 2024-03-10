import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FieldService } from '../../field.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-register',
  templateUrl: './service-register.component.html',
  styleUrls: ['./service-register.component.css']
})
export class ServiceRegisterComponent implements OnInit {

public service:any;
constructor(private fb:FormBuilder,private fieldService:FieldService,private router:Router){

}
  ngOnInit(): void {
  
    this.service = this.fb.group({
      companyName: [''],
      costPerHour: [''],
      serviceName: ['']
    });
  }


 public addService(){

  this.fieldService.registerService(this.service.value).subscribe((response)=>{
    if(response['statusCode']==200) this.router.navigate(['dashboard'])
    else console.log(response['error'])

  })
 }


}
