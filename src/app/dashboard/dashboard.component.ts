import { Component, OnInit } from '@angular/core';
import { FieldService } from '../field.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {


  public currentUser:any;

  constructor(private service:FieldService){}

  ngOnInit(): void {
    let currentUser: any =this.service.getUser();
    let role =this.service.getRole();

    if(role=="FORMER")
    this.navItems=this.former;
    else if(role=="SERVICE_PROVIDER")
    this.navItems=this.serviceProvider
    else ;
    
  }

 
  public navItems: [] = [];

  public former: any = [
    {
      route: '/dashboard',
      lable: 'Dashboard',
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
      route: '/dashboard',
      lable: 'Dashboard',
    },
    {
      route: '/register_service',
      lable: 'Add Service',
    },
  ];
}
