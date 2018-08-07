import { Component, OnInit, Inject } from '@angular/core';
import { CustomerDataCustomerSchema, CustomerDataAddressSchema } from '../../../interfaces/interfaces';
import { CustomerService } from '../../../services/customer/customer.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account-info-modal',
  templateUrl: './account-info-modal.component.html',
  styleUrls: ['./account-info-modal.component.scss']
})
export class AccountInfoModalComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  /* company: string = ''; 
  phone: string = ''; */
  email: string = '';
  showError: boolean = false;
  showSuccess: boolean = false;
  customerInfo: CustomerDataCustomerSchema;
  errorMessages: string[] = ['Error'];
  successMessages: string[] = ['Account Info Updated Successfully'];
 
  constructor(private _customer: CustomerService, public dialogRef: MatDialogRef<AccountInfoModalComponent>) {
    this.initVariables();    
  }

  ngOnInit() {}

  setAccountInfo(){
    this.customerInfo.firstname = this.firstName;
    this.customerInfo.lastname = this.lastName;
    this.customerInfo.email = this.email;
  }
  
  submitAccountInfo(){
    this.setAccountInfo();
    this._customer.updateCustomerData(this.customerInfo).subscribe(
      (response: CustomerDataCustomerSchema) => {
        this.showSuccess = true;
        this._customer.setAndStoreCustomerData(response);
        this.initVariables();
        console.log(response);
      },
      (error: any) => {
        this.showError = true;
        console.log(error);
      }
    );
  }

  initVariables() {
    this.customerInfo = JSON.parse(JSON.stringify(this._customer.customer))
    this.firstName = this.customerInfo.firstname;
    this.lastName = this.customerInfo.lastname;
    this.email = this.customerInfo.email;
  }
}