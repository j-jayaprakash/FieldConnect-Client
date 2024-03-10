import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FieldService } from './field.service';
import { AuthServiceGuard } from './auth-service.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterContentChecked {
  title = 'FieldConnect';

  public navItems = [];

  constructor(private service: FieldService) {
    this.updateMenu();
  }

  ngAfterContentChecked(): void {
    this.updateMenu();
  }

  updateMenu(): void {
    if (this.service.isloggedIn()) this.navItems = this.loginCommon;
    else this.navItems = this.common;
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
    },
  ];

  public loginCommon: any = [
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
    },
    {
      route: '/logout',
      lable: 'Logout',
    },
    {
      route:'/dashboard',
      lable:'Dashboard'
    }
  ];
}
