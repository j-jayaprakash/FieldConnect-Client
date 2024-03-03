import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthServiceGuard } from './auth-service.guard';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"about_us",
    component:AboutUsComponent
  },
  {
    path:"contact_us",
    component:ContactUsComponent
  },
  {
    path:"logout",
    component:LogoutComponent
  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"dashboard",
    canActivate:[AuthServiceGuard],
    component:DashboardComponent
  } ,{
    path:"profile",
    component:ProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
