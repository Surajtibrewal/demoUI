import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContectusComponent } from './contectus/contectus.component';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ngforcomponent } from './ngfor/ngfor.component';
import { TwowayComponent } from './twoway/twoway.component';

const routes: Routes = [
  
  
  { path:'home', component:HomeComponent},
  { path:'login', component:LoginComponent},

//   {path:'about',children:[
//  { path:'',component:AboutComponent},
//  {path:'twoway',component:TwowayComponent},
// ]},
//   { path:'contect us',component:ContectusComponent},
//   {path:'**',component:ContectusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
