import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer/customer.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  email: string;
  errorMessages: string = "";
  successMessages: string = "";
  showError: boolean;
  showSuccess: boolean;

  constructor(private _customer: CustomerService) { 
    /* this._customer.resetPasswordError = this.showError;
    this._customer.resetPasswordSuccess = this.showSuccess; */
  }

  ngOnInit() {}

  checkFields() {
    this.errorMessages = "";
    this.successMessages = "";

    if (!this.email) {
      this.errorMessages = "Please enter your email!"
      // this.showSuccess = false;
    } else {
      this.submitReset();
      //success
      this.successMessages = 'If the email entered exists you will recieve a password reset link';
      // this.showError = false;
      console.log('form submitted!');
      
    }
  }


  submitReset(){
    this._customer.passwordResetEmail(this.email);
  }
}
