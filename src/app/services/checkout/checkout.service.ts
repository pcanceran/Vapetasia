import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuoteDataAddressSchema, CustomerDataCustomerSchema, CustomerDataAddressSchema } from '../../interfaces/interfaces';
import { BehaviorSubject } from 'rxjs';
import { PaymentInfo } from '../../interfaces/checkout';

@Injectable()
export class CheckoutService {
  private _checkoutInfoSource = new BehaviorSubject<boolean>(true);
  checkoutInfo$ = this._checkoutInfoSource.asObservable();
  shippingAddress: QuoteDataAddressSchema;
  billingAddress: QuoteDataAddressSchema;

  constructor(private http: HttpClient) { }

  estimateShippingMethod(addressId: number) {
    return this.http.post('/checkout/estimate-shipping-method', { addressId: addressId });
  }

  getShippingMethods() {
    return this.http.get('/checkout/get-shipping-method');
  }

  getCimProfile() {
    return this.http.get('/checkout/cim-profile');
  }

  getRewardPoints() {
    return this.http.get('/checkout/reward-points');
  }

  applyPoints(pointsUpdate: { amount: number, remove: boolean}) {
    return this.http.post('/checkout/apply-points', pointsUpdate);
  }

  setShipping(shippingInfo: ShippingInformationData) {
    return this.http.post('/checkout/set-shipping', shippingInfo);
  }

  getCartTotal() {
    return this.http.get('/checkout/total');
  }

  placeAndPay(paymentInfo: OrderAndPayment) {
    return this.http.post('checkout/place-order', paymentInfo);
  }

  notifyUpdate() {
    console.log('shipping');
    console.log(this.shippingAddress);
    console.log('billing');
    console.log(this.billingAddress);
    this._checkoutInfoSource.next(true);
  }

  setDefaultBilling(address: CustomerDataAddressSchema, email: string) {

    let quoteAddress: QuoteDataAddressSchema = {
      region: address.region.region,
      region_id: address.region.region_id,
      region_code: address.region.region_code,
      country_id: address.country_id,
      street: address.street,
      telephone: address.telephone,
      postcode: address.postcode,
      city: address.city,
      firstname: address.firstname,
      lastname: address.lastname,
      email: email
    }
    this.billingAddress = quoteAddress;
  }
}

interface ShippingInformationData {
	methodCode : string;
	carrierCode : string;
	shipping : QuoteDataAddressSchema;
	attributes?: any;
	// optional, just for ease of use.
	pickupDate?: string; // date format: 'mm/dd/yyyy'
	pickupStore?: string; // 1=Vapetasia
}

interface OrderAndPayment {
  isNewCard?: boolean;
  cartId: number;
  billingAddress: QuoteDataAddressSchema;
  savedCard?: PaymentInfo;
  newCard?: {
    cc_cid: string;
		cc_number: string;
		save: boolean;
  }
}
