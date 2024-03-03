import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FieldService } from '../field.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

constructor(private route:Router,private service:FieldService){
  

}

login() {

  this.service.logout();
this.route.navigate(['/login'])

}

}
