import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerDataCustomerSchema, QuoteDataAddressSchema, CustomerDataAddressSchema, SalesDataOrderSchema } from '../../interfaces/interfaces';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class CustomerService {
  customer: CustomerDataCustomerSchema;
  private _loggedStatusSource = new BehaviorSubject<boolean>(false);
  loggedStatus$ = this._loggedStatusSource.asObservable();
  private _loggedSuccessSource = new BehaviorSubject<string>(' ');
  loggedSuccess$ = this._loggedSuccessSource.asObservable();
  private _updateCustomerSource = new BehaviorSubject<boolean>(true);
  updateCustomer$ = this._updateCustomerSource.asObservable();
  defaultBilling: CustomerDataAddressSchema;
  defaultShipping: CustomerDataAddressSchema;
  orderhistory: SalesDataOrderSchema[] = [];


  constructor(private _http: HttpClient, private router: Router) {
    this.isLogged();
  }

  isLogged() { // to be changed --- what was I going to change?
    if (localStorage.getItem('access-token')) {
      this.customer =  JSON.parse(localStorage.getItem('user-data'));
      this.initLoggedUser();
      this._loggedStatusSource.next(true);
    }
  }

  isLoggedIn() {
    //return this.loggedStatus$;
    return !!localStorage.getItem('access-token');
  }

  login(username: string, password: string) {
    this._loggedSuccessSource.next(' ');
    this._http.post('/customer/login', { username: username, password: password}).subscribe(
      (response: any) => {
        localStorage.setItem( 'access-token', response.token );
        this.setAndStoreCustomerData(response.userData);
        this.initLoggedUser();
        this._loggedStatusSource.next(true);
      },
      ( error ) => {
        (error) => console.log('Error ' + error);
        this._loggedSuccessSource.next('Incorrect credentials or your account is locked.');
      }
    )
  }

  logout() {
    this._loggedStatusSource.next(false);
    localStorage.clear();
    this.router.navigate(['']);
  }

  setAndStoreCustomerData(customer: CustomerDataCustomerSchema) {
    this.customer = customer;
    this.setDefaultAddresses();
    localStorage.setItem('user-data', JSON.stringify(customer));
    this._updateCustomerSource.next(true);
  }

  initLoggedUser() {
    this.setDefaultAddresses();
    this.getOrderHistory();
  }

  passwordResetEmail(email: string) { // check website ID
    this._http.post('/customer/password/email', { email: email, template: 'email_reset', websiteId: 2 /* distro */});
  }

  getOrderHistory() {
    this._http.get('/customer/order-history').subscribe(
      (response: any) => {
        this.orderhistory = response;
      },
      ( error ) => {
         if (error.status === 500) {  // temp solution for expired token
           this.logout();
         }
      }
    )
  }

  /* getStoredCards() {
    this._http.get('/customer/stored-cards').subscribe(
      (response: any) => {
        console.log('Stored Cards');
        console.log(response);
      },
      ( error ) => {
         console.log('Error ' + error);
      }
    )
  } */

  updateCustomerData(customerInfo: CustomerDataCustomerSchema) {
    return this._http.put('/customer/user-data', {customer: customerInfo});
  }

  deleteAddress(addressId: number) {
    return this._http.post('/customer/delete-address', { addressId: addressId });
  }

  setDefaultAddresses() {
    this.customer.addresses.forEach( (address: CustomerDataAddressSchema) => {
      if (address.hasOwnProperty('default_shipping') && address.default_shipping === true) {
        this.defaultShipping = address;
      }
      if (address.hasOwnProperty('default_billing') && address.default_billing === true) {
        this.defaultBilling = address;
      }
    })
  }
}
