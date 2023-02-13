import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { SubmittedFormComponent } from './submitted-form/submitted-form.component';

const routes: Routes = [
  {path:'', component:RegistrationFormComponent},
  {path:'submittedForm',component:SubmittedFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
