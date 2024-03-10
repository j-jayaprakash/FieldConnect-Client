import { Component, OnInit } from '@angular/core';
import { FieldService } from '../../field.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit {

  public workerDetailsList: any;

  constructor(private service:FieldService){

  }
  ngOnInit(): void {
    this.getWorkerList();
  }

  public getWorkerList(){

    this.service.getWorkerList().subscribe(response=>{

      this.workerDetailsList=response.data;
    })
  }


}
