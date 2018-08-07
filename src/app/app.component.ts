import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerService } from './services/customer/customer.service';
import { ProductGroup } from './interfaces/product-group';
import { CatalogService } from './services/catalog/catalog.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('cartAndProduct') cartAndProduct: MatSidenav;
  logged: boolean;
  loginSubscription: Subscription;
  selectProductSubscription: Subscription;
  sideNavMode: string;
  appStarted: boolean;

  constructor(private _customer: CustomerService, private _catalog: CatalogService) {
    this.sideNavMode = '';
    this.appStarted = false;
  }

  ngOnInit() {
    this.loginSubscription = this._customer.loggedStatus$
      .subscribe(status => this.logged = status);

    this.selectProductSubscription = this._catalog.selectProduct$
      .subscribe(product => {
        if (this.appStarted) {
          console.log(product);
          this.sideNavMode = 'product';
          this.cartAndProduct.toggle();
        } else {
          this.appStarted = true;
        }
      });
  }

  cartSideNav() {
    this.sideNavMode = 'cart';
    console.log(this.sideNavMode);
    this.cartAndProduct.toggle();
  }
}