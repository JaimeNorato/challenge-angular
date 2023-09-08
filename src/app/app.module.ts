import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { IpAddressComponent } from './pages/ip-address/ip-address.component';
import { JobComponent } from './pages/job/job.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IpAddressComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
