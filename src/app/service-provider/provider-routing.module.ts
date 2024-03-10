import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceHistoryComponent } from './service-history/service-history.component';
import { ServiceRegisterComponent } from './service-register/service-register.component';

const routes: Routes = [

  {
    path:"",
    children:[
      {
        path:'service_history',
        component:ServiceHistoryComponent
      },
      {
        path:'register_service',
        component:ServiceRegisterComponent
      },
      {
        path:'my_services',
        component:ServiceHistoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
