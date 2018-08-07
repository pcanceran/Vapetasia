import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerDataCustomerSchema } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewCustomerService {

  constructor(private http: HttpClient) { }

  checkEmailValid(email: string) {
    return this.http.post('/customer/email-valid', { customerEmail: email, websiteId: 2 /* distro */});
  }

  createCustomer(newCustomer: any) { // change to type
    return this.http.post('/customer/lead', newCustomer);
  }
}
