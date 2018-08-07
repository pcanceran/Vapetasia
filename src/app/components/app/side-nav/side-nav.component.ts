import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartComponent } from '../../cart/cart.component';
import { Router } from '@angular/router';
import { CustomerService } from '../../../services/customer/customer.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements OnInit {
  @Output() toggleSideNav  = new EventEmitter<boolean>();
  @Input() 
  logged: boolean;
  accountView: string = '';
  displayOptions: any = [
    {
      page: 'Home',
      icon: 'home',
      route: '',
      param: '',
      loggedDependent: false
    },
    {
      page: 'E-Liquids',
      icon: 'cloud',
      route: 'products',
      param: 'Liquid',
      loggedDependent: false
    },
    {
      page: 'Apparel',
      icon: 'accessibility',
      route: 'products',
      param: 'Apparel',
      loggedDependent: false
    },
    {
      page: 'Promo',
      icon: 'local_offer',
      route: 'products',
      param: 'Promo',
      loggedDependent: false
    },
    {
      page: 'My Account',
      icon: 'account_circle',
      route: 'account',
      param: '',
      loggedDependent: true
    },
    /* {
      page: 'Support',
      icon: 'receipt',
      route: 'support-ticket',
      param: '',
      loggedDependent: true
    }, */
    {
      page: 'Checkout',
      icon: 'store',
      route: 'order-checkout',
      param: '',
      loggedDependent: true
    }
  ]

  constructor(private router: Router, private _customer: CustomerService) { }

  ngOnInit() {}

  setRoute(route: string, param: string) {
    if (route === "products") {
      this.router.navigate([route, param]);
    } else {
      this.router.navigate([route]);
    }
    this.toggleSideNav.emit(true);
  }

  logout() {
    this._customer.logout();
    this.toggleSideNav.emit(true);
  }
}
