import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-password-modal',
  templateUrl: './password-modal.component.html',
  styleUrls: ['./password-modal.component.scss']
})
export class PasswordModalComponent implements OnInit {

  currentPassword: string = '';
  newPassword: string = '';
  confirmedPassword: string = '';
  currentPasswordCheck: boolean = false;
  newPasswordCheck: boolean = false;
  confirmedPasswordCheck: boolean = false;
  errorMessages: string[] = [];
  successMessages: string[] = [];

  constructor(private http: HttpClient) { }



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
  
  checkCurrentPassword(){
    if(this.currentPassword === '') {
      this.errorMessages.push('please enter your current password.');
      this.successMessages = []; 
      this.currentPasswordCheck = false;
    } else if (this.currentPassword !== '') {
      this.currentPasswordCheck = true;
    }
  }

  checkConfirmedPassword(){
    
    if(!this.confirmedPassword) {
      this.errorMessages.push('Please confirm password.');
    }else if(this.confirmedPassword !== this.newPassword) {
      this.errorMessages.push('passwords do not match');
      this.successMessages = [];
      this.confirmedPasswordCheck = false;
   
    } else if (this.newPassword === this.confirmedPassword){
     
      this.confirmedPasswordCheck = true;
    } 


    console.log('password is' + this.newPassword);
    console.log('confirmed:' + this.confirmedPassword);
  }

  checkAllFields(){
    if(!this.currentPassword && !this.newPassword && !this.confirmedPassword) {
      this.errorMessages = [];
      this.errorMessages.push('All fields are empty.')
    } else {
      console.log('else of checkAllFields fired!')
    }
  }
  submitForm(){
    this.errorMessages = [];
    this.successMessages = [];
    // this.currentPasswordCheck = false;
    // this.newPasswordCheck = false;
    // this.confirmedPasswordCheck = false;       
    this.checkNewPassword();
    this.checkCurrentPassword();
    this.checkConfirmedPassword();
    this.checkAllFields();

    console.log(this.errorMessages);

    if (this.newPasswordCheck && this.confirmedPasswordCheck && this.currentPasswordCheck) {
      this.http.put('/customer/password/reset', {currentPassword: this.currentPassword, newPassword: this.newPassword }).subscribe(
        (response: any) => {
          console.log(response);
          this.successMessages.push('Password Changed Successfully!');
          this.errorMessages = []; 
          this.currentPassword = '';
          this.newPassword = '';
          this.confirmedPassword = '';
        
        },
        ( error ) => {
          (error) => console.log('Error ' + error);
          this.errorMessages.push('Password entered does not match password on file');
          this.successMessages = [];
          console.log(error);
        }
      )
    } else {
      this.successMessages = [];   
      console.log(this.currentPasswordCheck);
      console.log(this.confirmedPasswordCheck);
      console.log(this.newPasswordCheck)
    }
    

  }
  ngOnInit() {
  }

}
