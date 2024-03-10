import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldService } from '../../field.service';

@Component({
  selector: 'app-service-booking',
  templateUrl: './service-booking.component.html',
  styleUrls: ['./service-booking.component.css']
})
export class ServiceBookingComponent {


  public workerList:any;
  public serviceList:any;

  public form: any;

  constructor(private fb: FormBuilder,private service:FieldService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      startsOn: [null, Validators.required],
      endsOn: [null, Validators.required],
      serviceId:[null,Validators.required],
      serviceCost: [0, Validators.required],
      type: ['string', Validators.required],
      workerIds: [[]]
    });
    this.onChangeType();
    this.getWorkerList();
    this.getServiceList();
  }

  onChangeType() {
    const workerIdsControl = this.form.get('workerIds');
    const serviceIdControl = this.form.get('serviceId');
    const typeControl = this.form.get('type');
  
    typeControl.valueChanges.subscribe((value:any) => {
      if (value === 'SERVICE') {
        if (serviceIdControl) {
          serviceIdControl.enable();
        }
        if (workerIdsControl) {
          workerIdsControl.disable();
        }
      } else if (value === 'WORKER') {
        if (workerIdsControl) {
          workerIdsControl.enable();
        }
        if (serviceIdControl) {
          serviceIdControl.disable();
        }
      }
    });    
  }
  

  public getWorkerList(){

    this.service.getWorkerList().subscribe(response=>{
      if(response['statusCode']==200){

        this.workerList=response['data'];
      }
      else console.log(response.error)
    })    

  }

  public getServiceList(){


    this.service.getServiceList().subscribe(response=>{
      if(response['statusCode']==200){

        this.serviceList=response['data'];
      }
      else console.log(response.error)
    }) 

  }

  onSubmit() {

    this.service.bookServiceOrWorker(this.form.value).subscribe(response=>{
      if(response.statusCode==200) console.log(response.data)
      else console.log(response.error)
    })
  }
  
}
