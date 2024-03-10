import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceBookingComponent } from './service-booking/service-booking.component';
import { WorkerListComponent } from './worker-list/worker-list.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { WorkHistoryComponent } from './work-history/work-history.component';

const routes: Routes = [

  {
    path: '',
    children: [{
      path: "book_service",
      component: ServiceBookingComponent
    },
    {
      path: "worker_list",
      component: WorkerListComponent

    },
    {
      path: "service_list",
      component: ServiceListComponent

    },
    {
      path: "work_history",
      component: WorkHistoryComponent

    }]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormerRoutingModule { }
