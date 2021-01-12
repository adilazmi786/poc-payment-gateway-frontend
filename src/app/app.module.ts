import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreecpaymentComponent } from './pages/threecpayment/threecpayment.component';
import { ThreecauthorisationComponent } from './pages/threecpayment/threecauthorisation/threecauthorisation.component';
import { CcavenueComponent } from './pages/ccavenue/ccavenue.component';
import { HttpProvider, WebApiProvider } from './shared/provider';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ThreecpaymentComponent,
    ThreecauthorisationComponent,
    CcavenueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpProvider, WebApiProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
