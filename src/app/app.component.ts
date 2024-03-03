import { AfterContentInit, Component, DoCheck } from '@angular/core';
import { FieldService } from './field.service';
import { AuthServiceGuard } from './auth-service.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'FieldConnect';

  public navItems = [];

constructor(private service:FieldService){
  if(sessionStorage.getItem('currentUser'))
  this.navItems=this.loginCommon;
  else this.navItems=this.common;

}

 
  public common: any = [
    {
      route: '/',
      lable: 'Home',
    },
    {
      route: '/about_us',
      lable: 'About Us',
    },
    {
      route: '/contact_us',
      lable: 'Contact Us',
    },
    {
      route: '/register',
      lable: 'Register',
    },
    {
      route: '/login',
      lable: 'LogIn',
    }
  ];

  public loginCommon:any=[
    {
      route: '/',
      lable: 'Home',
    },
    {
      route: '/about_us',
      lable: 'About Us',
    },
    {
      route: '/contact_us',
      lable: 'Contact Us',
    },
    {
      route: '/profile',
      lable: 'Profile',
    },    {
      route: '/logout',
      lable: 'Logout',
    }
  ] 

  public former:any=[
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
      route:"/work_history",
      lable:"Work History"
    }
  ]

  public serviceProvider:any=[
    {
      route: '/dashboard',
      lable: 'Dashboard',
    },
    {
      route:"/register_service",
      lable:"Add Service"
    }
    



  ]
}
