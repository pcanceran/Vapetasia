import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PasswordResetService } from '../../services/password-reset/password-reset.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-password-reset-page',
  templateUrl: './password-reset-page.component.html',
  styleUrls: ['./password-reset-page.component.scss']
})
export class PasswordResetPageComponent implements OnInit {
  paramsSubscription: Subscription;
  id: string;
  token: string;
  validToken: boolean;
  showForm: boolean;
  // review
  newPassword: string = '';
  confirmedPassword: string = '';
  newPasswordCheck: boolean = false;
  confirmedPasswordCheck: boolean = false;
  errorMessages: string[] = [];
  successMessages: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private _reset: PasswordResetService) {
    this.showForm = false;
    this.validToken = true;
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      if (params['id'] && params['token']) {
        this._reset.setReset(params['id'], params['token']);
        this.router.navigate(['password-reset']);
        console.log('hi');
      } else {
        this.showForm = true;
        console.log('hello');
        this._reset.validateToken()
          .subscribe(
            (response: { email: string}) => {
              this._reset.email = response.email;
              console.log('valid');
              console.log(response);
            },
            (error: HttpErrorResponse) => {
              console.log(error);
              this.validToken = false;
              this.errorMessages = []; // possibly don't need
              this.errorMessages.push('Your reset token is no longer valid.');
            }
          )
      }
    });
  }

  checkNewPassword() {
    if(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(this.newPassword) === true) {
      this.errorMessages = []; 
      this.newPasswordCheck = true;
    } else {
      this.errorMessages.push('password must be at least 8 characters, and contain one uppercase, lowercase and alphanumeric character.');
      this.successMessages = [];  
      this.newPasswordCheck = false;
    }
  }

  checkConfirmedPassword() {
    if(!this.confirmedPassword) {
      this.errorMessages.push('Please confirm password.');
    } else if(this.confirmedPassword !== this.newPassword) {
      this.errorMessages.push('passwords do not match');
      this.successMessages = [];
      this.confirmedPasswordCheck = false;
   
    } else if (this.newPassword === this.confirmedPassword){
     
      this.confirmedPasswordCheck = true;
    } 
  }

  checkAllFields() {
    if(!this.newPassword && !this.confirmedPassword) {
      this.errorMessages = [];
      this.errorMessages.push('All fields are empty.')
    } else {
      console.log('else of checkAllFields fired!')
    }
  }

  submitForm() {
    this.errorMessages = [];
    this.successMessages = [];
    this.checkNewPassword();
    this.checkConfirmedPassword();
    this.checkAllFields();

    if (this.newPasswordCheck && this.confirmedPasswordCheck) {
      this._reset.resetForgotten(this.newPassword).subscribe(
        (response: any) => {
          console.log(response);
          this.successMessages.push('Password changed successfully!');
          this.errorMessages = []; 
          this.newPassword = '';
          this.confirmedPassword = '';
        
        },
        ( error ) => {
          (error) => console.log('Error ' + error);
          this.errorMessages.push('An error occured resetting your password.');
          this.successMessages = [];
          console.log(error);
        }
      )
    } else {
      this.successMessages = [];   
      console.log(this.confirmedPasswordCheck);
      console.log(this.newPasswordCheck)
    }
  }
}
