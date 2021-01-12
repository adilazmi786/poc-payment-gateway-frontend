import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThreeCIframeLoadRequest } from 'src/app/shared/model/threcc-c-iframe-request';
import { ApiCoreService } from 'src/app/shared/service/apicore.service';

@Component({
  selector: 'app-threecpayment',
  templateUrl: './threecpayment.component.html',
  styleUrls: ['./threecpayment.component.scss']
})
export class ThreecpaymentComponent implements OnInit {

  ipsession: any;

  constructor(private service: ApiCoreService) { }

  ngOnInit(): void {
    // this.loadIpage();

    this.getIpSession();
  }

  getIpSession() {
    var request = new ThreeCIframeLoadRequest();
    request.security_emerchant_id = 'QikserveTest';
    request.security_validation_code = 'QikserveTest1';
    request.trx_merchant_reference = "1001";
    request.trx_merchant_reference_2 = "123";
    request.trx_amount_currency_code = "GBP";
    request.trx_amount_value = "1300";
    request.posturl_success = "https://www.preoday.com";
    request.posturl_failure = "https://www.preoday.com";
    request.redirect_approved = "https://www.preoday.com";
    request.redirect_declined = "https://www.preoday.com";
    request.trx_option = "G";
    request.template_id = "1";
    request.service_action = "InitialiseSoapAction";
    var amount = "1300";
    var merchantRef = "139";

    this.service.getIpgSession(merchantRef, amount).subscribe(response => {
      debugger;
      this.ipsession = response.ipgSession;
      const ipage_url = 'https://web2payuat.3cint.com/iPage/Service/_2006_05_v1_0_1/service.aspx?security_emerchant_id=QikserveTest&security_validation_code=QikserveTest1&trx_merchant_reference=' + merchantRef + '&trx_amount_currency_code=GBP&trx_amount_value=1300&template_id=qikserve.xml&posturl_success=http://localhost:4200/threecpay/authorise&posturl_failure=http://localhost:4200/threecpay/authorise&redirect_approved=http://localhost:4200/threecpay/authorise&redirect_declined=http://localhost:4200/threecpay/authorise&service_action=authorise&trx_option=G&XXX_IPGSESSION_XXX=' + this.ipsession;
      (document.getElementById('targetIframe') as HTMLInputElement).setAttribute('src', ipage_url);

    }, error => {
      console.log('Error: could not retrieve ipg session id');
    });
  }


}
