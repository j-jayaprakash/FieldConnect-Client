import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceBookingComponent } from './service-booking/service-booking.component';
import { WorkerListComponent } from './worker-list/worker-list.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { FormerRoutingModule } from './former-routing.module';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ServiceBookingComponent,
    WorkerListComponent,
    ServiceListComponent,
    WorkHistoryComponent
  ],
  imports: [
    CommonModule,
    FormerRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule
  ],
  exports:[
    FormerRoutingModule
  ]
})
export class FormerModule { }
