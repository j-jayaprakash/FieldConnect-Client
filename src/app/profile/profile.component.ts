import { NgForm } from '@angular/forms';
import { FieldService } from './../field.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  constructor(private service:FieldService){
    
    this.currentUser=this.service.getUser();
    let role=this.service.getRole();
    if(role=="FORMER")
      this.user=this.currentUser.formerDetails;
  else if(role=="SERVICE_PROVIDER")
 this.user=this.currentUser.serviceProviderDetails;
  else this.user=this.currentUser.workerDetails ;

  this. userName=this.currentUser.userName;
  this. role=role;
  this. emailId=this.user.personalInfo.emailId;
  this. mobile=this.user.personalInfo.mobile;
  this. gender=this.user.personalInfo.gender;
  this. age=this.user.personalInfo.age;
  this. profile=JSON.stringify(this.user.personalInfo.profileImageUrl);
  this. doorNo=this.user.address.doorNo;
  this. ad1=this.user.address.addrLine1;
  this. ad2=this.user.address.addrLine2;
  this. city=this.user.address.city;
  this. district=this.user.address.district;
  this. state=this.user.address.state;
  this. country=this.user.address.country;

    console.log(this.profile)

  }
  
  public currentUser:any;
  public user:any;
  

  public userName:string;
  public role:string;
  public emailId:string;
  public mobile:string;
  public gender:string;
  public age:string;
  public profile:string;
  public doorNo:string;
  public ad1:string;
  public ad2:string;
  public city:string;
  public district:string;
  public state:string;
  public country:String;


  ngOnInit(): void {
  }



}
