import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {AdminComponent} from "./components/admin/admin.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
// @ts-ignore
import {AjoutEleveComponent} from "./components/ajout-eleve/ajout-eleve.component";


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'admin', component:AdminComponent, children:[
    {path:'', component:DashboardComponent},
      {path:'dashboard', component:DashboardComponent},
      {path:'ajout-eleve', component:AjoutEleveComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
