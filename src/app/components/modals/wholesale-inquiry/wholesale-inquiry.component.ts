import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, AbstractControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AddressService } from '../../../services/address/address.service';
import { RegionCode, Country, NewAddress } from '../../../interfaces/address';
import { NewCustomerService } from '../../../services/new-customer/new-customer.service';
import { HttpParams } from '@angular/common/http';
import { CustomerDataCustomerSchema, CustomerDataAddressSchema } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-wholesale-inquiry',
  templateUrl: './wholesale-inquiry.component.html',
  styleUrls: ['./wholesale-inquiry.component.scss']
})
export class WholesaleInquiryComponent implements OnInit {

  info: string = 'Thank you for your interest in becoming a wholesaler of Vapetasia Gourmet E-Liquids, as well as our other products. Please complete this application and a member of our sales team will contact you to answer all of your questions and provide you with more information.';
  regionList: RegionCode[];
  /* passwordPattern: string = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'; */
  confirmedError: boolean = false;
  subscribeNewsletter: boolean = true; // !!!!!!!!! do it !!!!!!!!!!!!!!!!!!!!!
  errorMessage: string = '';
  newCustomer = {
    email: '',
    firstname: '',
    lastname: '',
    company: '',
    telephone: ''
  }

  //Form Controls
  firstNameFormControl = new FormControl('', [
    Validators.required
  ])
  lastNameFormControl = new FormControl('', [
    Validators.required
  ])
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ])
  phoneFormControl = new FormControl('', [
    Validators.required
  ])
  companyFormControl = new FormControl('', [
    Validators.required
  ])

  formControls: FormControl[] = [
    this.firstNameFormControl,
    this.lastNameFormControl,
    this.emailFormControl,
    this.phoneFormControl,
    this.companyFormControl
  ]

  matcher: any = new ErrorStateMatcher;

  constructor(private _newCustomer: NewCustomerService) {}

  ngOnInit() {
  }

  checkFormControls(): boolean {
    let formsValid = true;

    this.formControls.forEach( (formControl: FormControl) => {
      if (!formControl.valid) { formsValid = false }
    })
    return formsValid;
  }

  submitForm() {
    this.confirmedError = false;
    this.errorMessage = " ";
    console.log(this.newCustomer);
    if (this.checkFormControls()) {
      this._newCustomer.checkEmailValid(this.newCustomer.email).subscribe(
        (response: { message: string }) => {
          if (response.message) {
            this.accountCreation();
            console.log('creating account');
          } else {
            this.errorMessage = "The email entered is already in use."
            this.confirmedError = true;
          }
        },
        (error) => {
          console.log('Error ' + error);
        }
      )
    } else {
      console.log(this.errorMessage);
    }
    console.log(this.confirmedError);
  }

  //Custom Validators
  // confirmedPasswordValidator(control: FormControl) {
  //   let confirmedPassword = control.value;
  //   let password = this.password;
  //   console.log('validator is working!')
  //   if (confirmedPassword !== password) {
  //     return {error: true};
  //   }
  //   return null;
  // }

  accountCreation() {
    this._newCustomer.createCustomer(this.buildCustomer()).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('Error ' + error);
      }
    )
  }

  /* createRandom() {
    let base = Math.random().toString(36).slice(-8);
    let rNum = Math.floor(Math.random() * 9) + 1;
    let baseArray = base.split('');
    baseArray.splice(Math.floor(Math.random() * 7), 0, rNum.toString());
    baseArray.splice(Math.floor(Math.random() * 8), 0, '!');
    base = baseArray.join('');
    return base;
  } */

  buildCustomer() {
    let customer: any = {
      email: this.newCustomer.email,
      firstname: this.newCustomer.firstname,
      lastname: this.newCustomer.lastname,
    }
    return customer;
  }
}
