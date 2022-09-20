import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { HomeComponent } from './home/home.component';
import { ShowPatientComponent } from './show-patient/show-patient.component';


const routes: Routes = [
  {path:'',component:   HomeComponent},
  {path:  'home-component', component: HomeComponent},
  // {path: '',redirectTo: 'home=componenet', pathMatch: 'full'},
  {path: 'show-doctors',   component: DoctorListComponent},
  {path: 'show-patient', component: ShowPatientComponent},
  {path: 'doctors-info',   component: DoctorListComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
