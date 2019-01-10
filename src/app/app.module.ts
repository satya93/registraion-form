import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component'


var obj=[{path:"login",component:LoginComponent}, 
{path: "", component:HomeComponent},
{path: "Registration",  component:RegistrationComponent},
{path:"Dashboard", component:DashboardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(obj)    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
