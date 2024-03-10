import { Component, OnInit } from '@angular/core';
import { FieldService } from '../../field.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
ngOnInit(): void {
 this.loadServices()
}


constructor(private service:FieldService){

}
public serviceList:any;

public loadServices(){

this.service.getServiceList().subscribe(response=>{
  this.serviceList=response.data;
})
}


}
