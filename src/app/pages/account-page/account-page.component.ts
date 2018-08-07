import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer/customer.service';
import { CustomerDataCustomerSchema } from '../../interfaces/interfaces';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { MediaQueryService } from '../../services/media-query/media-query.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  customer: CustomerDataCustomerSchema;
  accountView: string;
  selectionOptions: any = [
    {
      page: 'Account Dashboard',
      icon: 'account_box'
    },
    {
      page: 'My Orders',
      icon: 'credit_card'
    },

    {
      page: 'Account Information',
      icon: 'library_books'

    },
    {
      page: 'Saved Carts',
      icon: 'shopping_cart'
    }
  ]
  mediaWatcher: Subscription;
  activeMq: string;

  constructor(private _customerService: CustomerService,
              private  _media: MediaQueryService) {
    if (_customerService.customer) { this.customer = _customerService.customer }
  }

  ngOnInit() {
  }

  selectView(view: string) {
    this.accountView = view;
    console.log('switch fired');
    console.log(this.accountView);
  }

}
