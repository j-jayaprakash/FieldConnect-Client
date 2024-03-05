import { FieldService } from './../field.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
started: boolean=true;


constructor(private breakpointObserver: BreakpointObserver,private service:FieldService) { }

// Default number of columns
defaultCols = 3;
defaultRow: string|number="8:7";

ngOnInit() {
  // Subscribe to screen size changes
  this.breakpointObserver.observe([
    Breakpoints.XSmall,
    Breakpoints.Small,
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge
  ]).subscribe(result => {
    if (result.breakpoints[Breakpoints.XSmall]) {
      // Extra small devices (phones), set cols to 1
      this.defaultCols = 1;
      this.defaultRow="2:3"
    }
    if (result.breakpoints[Breakpoints.Small]) {
      // Small devices (landscape phones), set cols to 2
      this.defaultCols = 1;
      this.defaultRow="8:7"
    }
    if (result.breakpoints[Breakpoints.Medium]) {
      // Medium devices (tablets), set cols to 3
      this.defaultCols = 2;
      this.defaultRow="8:7"
    }
    if (result.breakpoints[Breakpoints.Large]) {
      // Large devices (desktops), set cols to 4
      this.defaultCols = 3;
      this.defaultRow="1:1"
    }
    if (result.breakpoints[Breakpoints.XLarge]) {
      // Extra large devices (large desktops), set cols to 5
      this.defaultCols = 3;
      this.defaultRow="1:1"
    }
  });

 if( this.service.isloggedIn())
  this.started=false;
}







}
