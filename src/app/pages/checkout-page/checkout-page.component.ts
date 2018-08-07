import { Component, OnInit, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { CheckoutDataPaymentDetailsSchema, QuoteDataTotalsSchema, CustomerDataCustomerSchema, CustomerDataAddressSchema, QuoteDataAddressSchema, QuoteDataTotalSegmentSchema } from '../../interfaces/interfaces';
import { MatTabGroup } from '@angular/material';
import { LocalCartService } from '../../services/local-cart/local-cart.service';
import { CheckoutService } from '../../services/checkout/checkout.service';
import { PaymentProfile, PaymentInfo, ButtonStatus } from '../../interfaces/checkout';
import { NewAddress, RegionCode } from '../../interfaces/address';
import { CustomerService } from '../../services/customer/customer.service';
import { AddressService } from '../../services/address/address.service';
import { ConfirmOrderComponent } from '../../components/checkout/confirm-order/confirm-order.component';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit, OnDestroy {
  @ViewChild('tabGroup') tabGroup: MatTabGroup;
  @ViewChild('orderConfirmation') orderConfirmation: ConfirmOrderComponent;
  addressesLoaded: boolean;
  cartTotal: QuoteDataTotalsSchema;
  isNewCard: boolean;
  newCard: NewCard;
  newAddress: NewAddress;
  /* paymentProfiles: PaymentProfile[]; */
  paymentInfo: PaymentInfo;
  paymentProfile: PaymentProfile;
  fin: boolean;
  completeMessage: string = 'Your order is Complete';
  orderNumber;
  buttonStatus: ButtonStatus;
  shippingAddress: QuoteDataAddressSchema;
  billingAddress: QuoteDataAddressSchema;
  defaultBilling: boolean;
  info: string = 'hello world';
  regionList: RegionCode[];

  constructor(private _checkout: CheckoutService, private _cart: LocalCartService, private _customer: CustomerService, private _address: AddressService) {
    this.regionList = _address.regionCodes;
    this.defaultBilling = true;
    this.buttonStatus = {
      shippingComplete: false,
      paymentComplete: false,
      rewardsComplete: false,
      orderComplete: false
    }
    this.cartTotal = {
      total_segments: []
    }
    this.paymentInfo = {
      cardProfileId: "",
      cvc: "",
      address: null
    }
    this.newCard = {
      cc_cid: "",
      cc_number: "",
      save: false
    }
    this.paymentProfile = {
      customerPaymentProfileId: "",
      billTo: undefined,
      payment: undefined
    }
    this.setNewAddress();
    this.setQuoteAddresses();
    this.setDefaultAddress();
  }

  ngOnInit() {}

  ngOnDestroy() {}

  setShippingComplete(responseData: { status: boolean, data?: CheckoutDataPaymentDetailsSchema }) {
    this.buttonStatus.shippingComplete = responseData.status;
    if (responseData.status) {
      for (let key_value in responseData.data.totals) {
        this.cartTotal[key_value] = responseData.data.totals[key_value];
      }
    }
    this.filterTaxField(this.cartTotal.total_segments);
  }

  getTotal() {
    this._checkout.getCartTotal().subscribe(
      data => {
        for (let key_value in data) {
          this.cartTotal[key_value] = data[key_value];
        }
        this.filterTaxField(this.cartTotal.total_segments);
        this.buttonStatus.rewardsComplete = true;
      }
    )
  }

  mapCartTotalData(total: QuoteDataTotalsSchema) {
    // implement and consolidate above functions & below function
  }

  filterTaxField(segments: QuoteDataTotalSegmentSchema[]) {
    for (let i = 0; i < segments.length; i++) {
      if (segments[i].code === 'tax') {
        segments.splice(i, 1);
      }
    }
  }

  setQuoteAddresses() {
    this.shippingAddress = this._checkout.shippingAddress;
    this.billingAddress = this._checkout.billingAddress;
  }

  setPaymentComplete(status) {
    this.buttonStatus.paymentComplete = status;
  }

  setRewardsComplete(status) {
    this.buttonStatus.rewardsComplete = status;
  }

  navigateTabGroup(index: number) {
    this.tabGroup.selectedIndex = index;
  }

  placeOrder() {
    let paymentInfo: OrderAndPayment = {
      isNewCard: this.isNewCard,
      cartId: this._cart.localCart.cartId,
      billingAddress: this._checkout.billingAddress, // change back to default on destroy
      savedCard: this.paymentInfo,
      newCard: this.newCard
    }

    this._checkout.placeAndPay(paymentInfo)
      .subscribe((data: string) => {
        console.log(data);
        this.orderNumber = data;
        this.completeMessage = "Your order number "
        this.tabGroup.selectedIndex = 3;
        this.fin = true;
      },
        error => {
          this.tabGroup.selectedIndex = 3;
          this.completeMessage = 'There was an error processing your order.'
          this.fin = true;
        })
  }

  setNonDefaultBilling() {
    let address: CustomerDataAddressSchema = {
      firstname: this.newAddress.firstName,
      lastname: this.newAddress.lastName,
      street: this.newAddress.street,
      city: this.newAddress.city,
      region: this._address.createRegionObject(this.newAddress.selectedRegion.default_name),
      postcode: this.newAddress.zipCode,
      country_id: this._address.getCountryId(this.newAddress.selectedRegion.default_name),
      telephone: this.newAddress.telephone
    }
    this._checkout.setDefaultBilling(address, this._customer.customer.email);
  }

  setNewAddress() {
    this.newAddress = {
      firstName: '',
      lastName: '',
      street: [''],
      city: '',
      zipCode: '',
      telephone: ''      
    };
  }

  findDefaultAddress() {
    let defaultAddress;
    let defaultId = this._customer.customer.default_billing;

    this._customer.customer.addresses.forEach(address => {
      if (address.id.toString() === defaultId) {
        defaultAddress = address;
      }
    })
    return defaultAddress;
  }

  setDefaultAddress() {
    let self = this;
    let defaultAddress = this.findDefaultAddress();

    this.newAddress.firstName = defaultAddress.firstname;
    this.newAddress.lastName = defaultAddress.lastname;
    this.newAddress.street = defaultAddress.street;
    this.newAddress.city = defaultAddress.city;
    this.newAddress.selectedRegion = setRegion();
    this.newAddress.zipCode = defaultAddress.postcode;
    this.newAddress.telephone = defaultAddress.telephone;
    
    function setRegion() {
      for (let i = 0; i < self.regionList.length; i++) {
        if (self.regionList[i].default_name === defaultAddress.region.region) {
          return self.regionList[i];
        }
      }
    }
  }

  indexChanged(index: number) {
    if (index === 2) {
      if (this.isNewCard) {
        this.setNonDefaultBilling();
        this.orderConfirmation.isNewCard = true;
      } else {
        this._checkout.setDefaultBilling(this._customer.defaultBilling, this._customer.customer.email);
        this.orderConfirmation.isNewCard = false;
      }
    }
  }
}

interface NewCard {
  cc_cid: string;
  cc_number: string;
  save: boolean;
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