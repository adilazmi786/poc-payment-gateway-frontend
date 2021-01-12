import { Component, Input, OnInit } from '@angular/core';
import { ApiCoreService } from 'src/app/shared/service/apicore.service';

@Component({
  selector: 'app-threecauthorisation',
  templateUrl: './threecauthorisation.component.html',
  styleUrls: ['./threecauthorisation.component.scss']
})
export class ThreecauthorisationComponent implements OnInit {

  @Input()
  private doument!: Document;

  constructor(private service: ApiCoreService) { }
  authResponse: any;
  merchantRef: any;
  payResponse: any;
  token: any;
  ngOnInit(): void {
    debugger;
    let response = document.location.search;
    this.authResponse = response.replace(/[^\w\s]/gi, " ").trim();

    this.merchantRef = this.authResponse.split(" ")[1];
    console.log("authResponse" + this.authResponse[0]);

    // call pay api


  }
  submitPay() {
    debugger;
    let amount = 1300;
    this.submitPayment(this.merchantRef, amount);
  }
  submitPayment(merchantRef: any, amount: any) {
    this.service.payWithMerchantRef(merchantRef, amount).subscribe(response => {
      debugger;
      this.payResponse = response;
      localStorage.setItem("token", this.payResponse.tokenNo);
      alert(this.payResponse.txStateText);
    });
  }

  payWithToken() {
    let amount = 1300;
    this.token = localStorage.getItem("token");
    this.service.payWithToken(this.merchantRef, amount, this.token).subscribe(response => {
      debugger;
      this.payResponse = response;
      alert(this.payResponse.txStateText);
    });
  }

}
