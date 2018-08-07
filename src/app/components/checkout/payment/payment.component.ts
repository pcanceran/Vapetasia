import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { CustomerService } from '../../../services/customer/customer.service';
import { CheckoutService } from '../../../services/checkout/checkout.service';
import { QuoteDataTotalsSchema, QuoteDataPaymentMethodSchema, CustomerDataAddressSchema, QuoteDataAddressSchema } from '../../../interfaces/interfaces';
import { PaymentProfile, RewardPointsData, ButtonStatus, PaymentInfo } from '../../../interfaces/checkout';
import { NewAddress, RegionCode } from '../../../interfaces/address';
import { FormControl, ValidatorFn, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { AddressService } from '../../../services/address/address.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @Input() paymentMethods: QuoteDataPaymentMethodSchema;
  @Input() cartTotal: QuoteDataTotalsSchema;
  @Input() paymentInfo: PaymentInfo;
  @Input() selectedPayment: PaymentProfile;
  @Input() newCard: NewCard;
  @Input() defaultBilling: boolean;
  @Input() newAddress: NewAddress;
  @Input() info: string;
  @Input() buttonStatus: ButtonStatus;
  @Output() paymentMethodStatus = new EventEmitter<boolean>();
  @Output() rewardsPointsStatus = new EventEmitter<boolean>();
  @Output() rewardsPointsUpdate = new EventEmitter<boolean>();
  @Output() navigateTabs = new EventEmitter<number>();
  @Output() isNewCard = new EventEmitter<boolean>();
  @Output() resetNonDefaultBilling = new EventEmitter<boolean>();
  // @Output() shippingMethodStatus = new EventEmitter<{ status: boolean, data?: CheckoutDataPaymentDetailsSchema }>();
  cimProfile: any;
  paymentProfiles: PaymentProfile[];
  rewardPointsData: RewardPointsData;
  selectedPaymentOption = '';
  pointsToApply: number;
  pointsReady: boolean;
  newCardSelected = false;
  billingAddress: CustomerDataAddressSchema;
  cvc: string;
  cardLength: number = 16;
  maxLength: number = 19;
  cvvLength: number = 3;

  /*
  todos: 
  -show error on any card type or card #
  -maxLength Validator stopped working
  -show error if char length is less
  -show cvc error for valid card types

  */
  //valid card types with the max length

  validCardTypes: any = [
    {
      type: 'Visa',
      prefixes: ['4'],
      maxLength: 19,
      cardLength: 16,
      cvvLength: 3
    },
    {
      type: 'MasterCard',
      prefixes: ['50', '51', '52', '53', '54', '55'],
      maxLength: 19,
      cardLength: 16,
      cvvLength: 3
    },
    {
      type: 'American Express',
      prefixes: ['34', '37'],
      maxLength: 17,
      cardLength: 15,
      cvvLength: 4
    },
    {
      type: 'Discover',
      prefixes: ['6011', '644', '645', '646', '647', '648', '649', '65'],
      maxLength: 19,
      cardLength: 16,
      cvvLength: 3
    }
  ]
  validPrefixes: any = ['4', '50', '51', '52', '54', '55',
    '34', '37', '6011', '644', '645',
    '646', '647', '648', '649', '65']


  currentCVVCard: string = '';
  currentCardType: string = '';
  cardError: Boolean = false;
  submitError: boolean = false;
  
  // for card component
  messages: any = { validDate: 'valid\ndate', monthYear: 'mm/yyyy' };
  placeholders: any = { number: '•••• •••• •••• ••••', name: 'Full Name', expiry: '••/••', cvc: '•••' };
  masks: any;
  // Form Groups
  cardFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  matcher = new ErrorStateMatcher();

  constructor(private _checkout: CheckoutService, private _customer: CustomerService, private _address: AddressService) {
    this.billingAddress = _customer.defaultBilling;
    this.pointsReady = true;

    this.cardFormGroup = new FormGroup({
      card: new FormControl('', [this.detectCardType(), Validators.required, this.maxLengthValidator()]),
      first: new FormControl('', Validators.required),
      last: new FormControl('', Validators.required),
      expiration: new FormControl('', Validators.required),
      cvc: new FormControl('', [Validators.required, this.cvcValidator()])
    })

    this.addressFormGroup = new FormGroup({
      first: new FormControl('', Validators.required),
      last: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zipCode: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
    this.getRewardPointsStatus();
    this.getCimProfile();
    this.resetNonDefaultBilling.emit(true);
    this.rangeFinder();
    console.log(this.validPrefixes);
    console.log(this.validCardTypes);
  }

  setNewCardSelected(value: boolean) {
    this.newCardSelected = value;
    this.isNewCard.emit(value);
    this.paymentMethodStatus.emit(true);
  }

  paymentMethodSelected(paymentProfile: PaymentProfile) { // need to write map
    if (paymentProfile !== this.selectedPayment) {
      this.paymentInfo.cvc = '';
      this.paymentInfo.address = this._checkout.billingAddress;
      this.paymentInfo.cardProfileId = paymentProfile.customerPaymentProfileId;
      this.selectedPayment.customerPaymentProfileId = paymentProfile.customerPaymentProfileId;
      this.selectedPayment.payment = paymentProfile.payment;
      this.selectedPayment.billTo = paymentProfile.billTo;
    }
    /* this._checkout.billingAddress = {
      street: [paymentProfile.billTo.address],
      city: paymentProfile.billTo.city,
      country_id: paymentProfile.billTo.country,
      firstname: paymentProfile.billTo.firstName,
      lastname: paymentProfile.billTo.lastName,
      telephone: paymentProfile.billTo.phoneNumber,
      region_id: 0, // write function
      region: "Nevada", // write function
      region_code: "NV", // write function
      postcode: paymentProfile.billTo.zip,
      email: this._customer.customer.email
    } */
    console.log(this.selectedPayment);
    this.paymentMethodStatus.emit(true);
  }

  paymentOptionSelected() {
    console.log(this.selectedPayment);
  }


  getLastFour(cardNumber: string) {
    const cLen = cardNumber.length;
    return cardNumber.substring(cLen - 4, cLen);
  }

  getRewardPointsStatus() {
    this._checkout.getRewardPoints().subscribe(
      (response: any) => {
        this.rewardPointsData = {
          show: response.chechout_rewards_is_show,
          points: response.chechout_rewards_points,
          max: response.chechout_rewards_points_max,
          spend: response.chechout_rewards_points_spend,
          availible: response.chechout_rewards_points_availble,
          used: response.chechout_rewards_points_used
        };
        this.rewardsPointsStatus.emit(true);
      },
      (error) => {
        console.log('Error ' + error);
      }
    );
  }

  detectCardType(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let input = String(control.value).replace(' ', '');
      return this.isInvalid(input) ? { error: true } : null;
    };
  }

  isInvalid(input: string) {
    let invalid = false;
    try {
      this.validPrefixes.forEach(prefix => {
        if (input.indexOf(prefix) === 0) {
          throw 1;
        }
      })
    } catch (e) {
      return false;
    }
    return true;
  }

  getCimProfile() {
    this._checkout.getCimProfile().subscribe(
      (response: any) => {
        this.cimProfile = response;
        console.log(response);
        this.paymentProfiles = response.paymentProfiles;
      },
      (error) => {
        console.log('Error ' + error);
      }
    );
  }

  maxPoints() {
    this.pointsToApply = 0;
    this.pointsToApply = this.rewardPointsData.max;
  }

  applyPoints(remove: boolean) {
    this.rewardsPointsStatus.emit(false);
    this.pointsReady = false;
    if (remove) {
      this.pointsToApply = 0;
    }
    this._checkout.applyPoints({ amount: this.pointsToApply, remove: remove }).subscribe(
      (response: any) => {
        console.log(response);
        this.rewardsPointsUpdate.emit(true);
        this.pointsReady = true;
      },
      (error) => {
        console.log('Error ' + error);
      }
    );
    this.pointsToApply = undefined;
  }

  switchTabs(index: number) {
    if (index === 2) {
      if (this.newCardSelected) {
        this.checkAllFields(this.cardFormGroup);
        this.checkAllFields(this.addressFormGroup);
        if (this.cardFormGroup.valid && (this.defaultBilling || this.addressFormGroup.valid)) {
          this.navigateTabs.emit(index);
        }
      } else {
        if (true) { // change to cvc validation
          this.navigateTabs.emit(index);
        }
      }
    } else {
      this.navigateTabs.emit(index);
    }
  }

  checkAllFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.checkAllFields(control);
      }
    })
  }
  rangeFinder() {
    for (let i = 622126; i <= 622925; i++) {
     this.validPrefixes.push(i.toString());
     this.validCardTypes[3].prefixes.push(i.toString());
    }

    for (let i = 2221; i < 2720; i++) {
      this.validPrefixes.push(i.toString());
      this.validCardTypes[1].prefixes.push(i.toString());
    }
  }


  maxLengthValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let input = control.value
      let types = ['Visa', 'MasterCard', 'American Express', 'Discover']
      if(this.cardFormGroup) {
        this.cardFormGroup.controls.cvc.enable();
      }
      try {
        this.validCardTypes.forEach(cardObject => {
          let replacedInput = input.replace(' ', '');
          cardObject.prefixes.forEach(prefix => {
            if (replacedInput.indexOf(prefix) === 0) {
              this.currentCardType = cardObject.type;
              this.maxLength = cardObject.maxLength;
              this.cardLength = cardObject.cardLength;
              types.forEach(type => {
                if (input.length < cardObject.maxLength && type.indexOf(cardObject.type) === 0) {
                  throw { invalidLength: `card number must be ${cardObject.cardLength} characters` }
                }
              })
            }
          })
        })
      } catch (err) {
        return (err)
      }
      return null;
    }
  }
  cvcValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let input = control.value;
      try { 
        this.validCardTypes.forEach(cardObject => {
          if(cardObject.type === this.currentCardType){
          if (input.length !== cardObject.cvvLength) {
            this.validCardTypes.forEach(cardObject => {
              if(cardObject.type === this.currentCardType) {
              this.cvvLength = cardObject.cvvLength;
              this.currentCVVCard = this.currentCardType;
              throw { invalidCVV: 'invalid cvv' };
              }
            })
          } else if (cardObject.type === this.currentCardType) {
            this.cvvLength = cardObject.cvvLength;
          }
        }
        })
      } catch (e) {
        return e;
      }
      return null;
    }
  }
}

//create cvv validator (3 or 4) digits depending on card type






interface NewCard {
  cc_cid: string;
  cc_number: string;
  save: boolean;
}
