import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCoreService } from './shared/service/apicore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poc-fronted';

  constructor(private service: ApiCoreService, private router: Router) {

  }
  loadIpage() {
    const navigationDetails: string[] = ['/threecpay'];
    this.router.navigate(navigationDetails);
  }
}
