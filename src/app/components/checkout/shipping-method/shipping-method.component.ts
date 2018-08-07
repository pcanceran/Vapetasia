import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CustomerDataAddressSchema, QuoteDataShippingMethodSchema, QuoteDataAddressSchema, CheckoutDataPaymentDetailsSchema } from '../../../interfaces/interfaces';
import { CustomerService } from '../../../services/customer/customer.service';
import { CheckoutService } from '../../../services/checkout/checkout.service';
import { LocalCartService } from '../../../services/local-cart/local-cart.service';
import { ButtonStatus } from '../../../interfaces/checkout';

@Component({
  selector: 'app-shipping-method',
  templateUrl: './shipping-method.component.html',
  styleUrls: ['./shipping-method.component.scss']
})
export class ShippingMethodComponent implements OnInit {
  @Output() addressesLoaded = new EventEmitter<boolean>();
  @Output() shippingMethodStatus = new EventEmitter<{ status: boolean, data?: CheckoutDataPaymentDetailsSchema }>();
  @Output() navigateTabs = new EventEmitter<number>();
  @Input() buttonStatus: ButtonStatus;
  addresses: CustomerDataAddressSchema[];
  selectedAddress: CustomerDataAddressSchema;
  shippingMethods: QuoteDataShippingMethodSchema[] = [];
  shippingLoading: boolean;
  localPickupEligible: boolean;
  queueActive: boolean;
  queueActiveSubscription;

  constructor(private _customer: CustomerService, private _checkout: CheckoutService, private _cart: LocalCartService) {
    this.selectedAddress = _customer.defaultShipping;
    _checkout.shippingAddress = this.convertCustomerAddressToQuoteAddress(_customer.defaultShipping, false);
    _checkout.billingAddress = this.convertCustomerAddressToQuoteAddress(_customer.defaultBilling, false);
    this.setlocalPickupEligible();
    this._checkout.estimateShippingMethod(this.selectedAddress.id)
      .subscribe( (data: QuoteDataShippingMethodSchema[]) => {
       this.shippingMethods = data;
      })
    this.shippingMethodStatus.emit({ status: false});
  }

  ngOnInit() {
    this.addresses = this._customer.customer.addresses;
    this.addressesLoaded.emit(true);

    this.queueActiveSubscription = this._cart.queueStatus$.subscribe(
      status => { this.queueActive = status }
    )
  }

  selectAddress(address: CustomerDataAddressSchema) {
    if (address !== this.selectedAddress) {
      this.shippingMethodStatus.emit({ status: false});
      this.shippingMethods = [];
      this.selectedAddress = address;
      this.setlocalPickupEligible();
      this._checkout.estimateShippingMethod(address.id)
        .subscribe( (data: QuoteDataShippingMethodSchema[]) => {
          this._checkout.shippingAddress = this.convertCustomerAddressToQuoteAddress(this.selectedAddress, false);
          this._checkout.notifyUpdate();
          this.shippingMethods = data;
          console.log(data);
        })
    }
  }

  shippingMethodSelected(method: QuoteDataShippingMethodSchema) {
    this.shippingMethodStatus.emit({ status: false, data: undefined });
    this.shippingLoading = true;
    this._checkout.setShipping({
      methodCode: method.method_code,
      carrierCode: method.carrier_code,
      shipping: this.convertCustomerAddressToQuoteAddress(this.selectedAddress, false)
    }).subscribe(
      (data: CheckoutDataPaymentDetailsSchema) => {
        console.log(data);
        this.shippingMethodStatus.emit({ status: true, data: data });
        this.shippingLoading = false;
      },
      error => {
        console.log(error);
      }
    )
  }

  setlocalPickupEligible() {
    if (this.selectedAddress.city === "Las Vegas" || this.selectedAddress.city === "Henderson") {
      this.localPickupEligible = true;
    } else {
      this.localPickupEligible = false;
    }
  }

  convertCustomerAddressToQuoteAddress(address : CustomerDataAddressSchema, sameAsBilling : boolean): QuoteDataAddressSchema {
    let email = this._customer.customer.email;

    return {
    customer_id: address.customer_id,
    region: address.region.region,
    region_id: address.region.region_id,
    region_code: address.region.region_code,
    country_id: address.country_id,
    street: address.street,
    company: address.company,
    telephone: address.telephone,
    fax: address.fax,
    postcode: address.postcode,
    city: address.city,
    firstname: address.firstname,
    lastname: address.lastname,
    middlename: address.middlename,
    prefix: address.prefix,
    suffix: address.suffix,
    vat_id: address.vat_id,
    email: email,
    same_as_billing: Number(sameAsBilling),
    customer_address_id: address.id,
    //extension_attributes: address.extension_attributes,
    //custom_attributes: address.custom_attributes
    } as QuoteDataAddressSchema;
  }

  switchTabs(index: number) {
    this.navigateTabs.emit(index);
  }
}