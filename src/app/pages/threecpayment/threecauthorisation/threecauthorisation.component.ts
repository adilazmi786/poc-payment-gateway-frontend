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
  txnId: any;
  refundRes: any;
  authCode: any;
  ngOnInit(): void {
    debugger;
    let response = document.location.search;
    this.authResponse = response.replace(/[^-\w\s]/gi, " ").trim().split(" ");

    this.merchantRef = this.authResponse[1];
    this.txnId = this.authResponse[3];
    this.authCode = this.authResponse[5];

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
      //localStorage.setItem("txnId", this.payResponse.txStateText);

      alert(this.payResponse.txStateText);
    });
  }

  payWithToken() {
    let amount = 1300;
    //this.token = localStorage.getItem("token");
    this.service.payWithToken(this.txnId, amount).subscribe(response => {
      debugger;
      this.payResponse = response;
      alert(this.payResponse.txStateText);
    });
  }

  reverseTransaction() {
    debugger;
    //let txnId = localStorage.getItem("txnId");
    this.service.reverseTransaction(this.txnId).subscribe(res => {
      debugger;
      this.refundRes = res;
      alert(this.refundRes.txStateText);
    });
  }

}
