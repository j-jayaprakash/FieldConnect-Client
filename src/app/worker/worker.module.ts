import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeStatusComponent } from './change-status/change-status.component';

import { WorkerRoutingModule } from './worker-routing.module';
import { MyWorkHistoryComponent } from './my-work-history/my-work-history.component';



@NgModule({
  declarations: [
    ChangeStatusComponent,
    MyWorkHistoryComponent
  ],
  imports: [
    CommonModule,
    WorkerRoutingModule
  ]
})
export class WorkerModule { }
