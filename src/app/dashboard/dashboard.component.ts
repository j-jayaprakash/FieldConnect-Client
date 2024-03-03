import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    let curr: any = sessionStorage.getItem('currentUser');
    let role = JSON.parse(curr)['roles'][0];

    if(role=="FORMER")
    this.navItems=this.former;
    else if(role=="SERVICE_PROVIDER")
    this.navItems=this.serviceProvider
    else ;
    
  }

  opened: boolean = true;

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
