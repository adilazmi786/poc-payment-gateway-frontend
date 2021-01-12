import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThreecauthorisationComponent } from './pages/threecpayment/threecauthorisation/threecauthorisation.component';
import { ThreecpaymentComponent } from './pages/threecpayment/threecpayment.component';

const routes: Routes = [
  {
    path: 'threecpay',
    component: ThreecpaymentComponent,
  },
  {
    path: 'threecpay/authorise',
    component: ThreecauthorisationComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
