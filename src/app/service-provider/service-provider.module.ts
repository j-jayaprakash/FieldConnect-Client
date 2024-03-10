import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceRegisterComponent } from './service-register/service-register.component';
import { ViewServicesComponent } from './view-services/view-services.component';
import { ServiceHistoryComponent } from './service-history/service-history.component';
import { ProviderRoutingModule } from './provider-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';



@NgModule({
  declarations: [
    ServiceRegisterComponent,
    ViewServicesComponent,
    ServiceHistoryComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ServiceProviderModule { }
