import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeStatusComponent } from './change-status/change-status.component';
import { MyWorkHistoryComponent } from './my-work-history/my-work-history.component';


const routes: Routes = [

  {
    path:"",
    children:[
      {
        path:'work_history',
        component:MyWorkHistoryComponent
      },
      {
        path:'change_status',
        component:ChangeStatusComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkerRoutingModule { }
