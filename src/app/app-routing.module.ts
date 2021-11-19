import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavlogoComponent} from "./components/navlogo/navlogo.component";
import {MyprojectsComponent} from "./components/myprojects/myprojects.component";
import {ContactsComponent} from "./components/contacts/contacts.component";

const routes: Routes = [
  {path:'', component: NavlogoComponent},
  {path:'myprojects', component:MyprojectsComponent},
  {path:'contacts', component:ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
