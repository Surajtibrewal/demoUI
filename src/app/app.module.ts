import { APP_BOOTSTRAP_LISTENER, Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { myContainerComponent } from './myContainer/myContainer.component';
import { ngforcomponent } from './ngfor/ngfor.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContectusComponent } from './contectus/contectus.component';
import { TwowayComponent } from './twoway/twoway.component';
import { TestComponent } from './test/test.component';
// import { LgoComponent } from './lgo/lgo.component';

const appRoutes:Routes=[
 
]

@NgModule({
  declarations: [
    AppComponent,
    myContainerComponent,
    ngforcomponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ContectusComponent,
    TwowayComponent,
    TestComponent,
    
    // LgoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
