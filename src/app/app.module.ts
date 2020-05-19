import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HotelComponent } from './hotel/hotel.component';
import { HotelDescComponent } from './hotel-desc/hotel-desc.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HotelComponent,
    HotelDescComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
