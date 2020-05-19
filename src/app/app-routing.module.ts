import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component'
import { HotelDescComponent } from './hotel-desc/hotel-desc.component';
import { LoginComponent } from './login/login.component';
import { InvoiceComponent } from './invoice/invoice.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'hoteldesc', component: HotelDescComponent },
  {
    path: 'hotels', component: HotelComponent
  },
  {
    path: 'hotels/:id', component: HotelDescComponent
  },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
