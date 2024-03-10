import { Component, OnInit } from '@angular/core';
import { FieldService } from '../field.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {


  public currentUser:any;

  constructor(private service:FieldService,private router:Router){}

  ngOnInit(): void {
    let currentUser: any =this.service.getUser();
    let role =this.service.getRole();

    if(role=="FORMER")
    this.navItems=this.former;
    else if(role=="SERVICE_PROVIDER")
    this.navItems=this.serviceProvider
    else this.navItems=this.worker ;
    
  }

 
  public navItems: [] = [];

  public former: any = [

    {
      route:'/book_service',
      lable:'Book Service'
    },
    {
      route: '/worker_list',
      lable: 'Worker List',
    },
    {
      route: '/service_list',
      lable: 'Service List',
    },
    {
      route: '/work_history',
      lable: 'Work History',
    },
  ];

  public serviceProvider: any = [
    {
      route: '/register_service',
      lable: 'Add Service',
    },
    {
      route: '/my_services',
      lable: 'My Services',
    },
    {
      route: '/service_history',
      lable: 'Service History',
    },
  ];


  public worker:any=[
    {
      route:'/work_history',
      lable:'Work History'
    },
    {
      route:'/change_status',
      lable:'Change Status'
    }
    
  ]
}
