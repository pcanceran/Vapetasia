import { Component, OnInit } from '@angular/core';
import { CustomerDataCustomerSchema, CustomerDataAddressSchema } from '../../../interfaces/interfaces';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { CustomerService } from '../../../services/customer/customer.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { MediaQueryService } from '../../../services/media-query/media-query.service';
import { AccountInfoModalComponent } from '../../modals/account-info-modal/account-info-modal.component' 
import { PasswordModalComponent } from '../../modals/password-modal/password-modal.component';
import { ManageAddressesModalComponent } from '../../modals/manage-addresses-modal/manage-addresses-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  align: boolean = false;
  watcher: Subscription;
  customer: CustomerDataCustomerSchema;
  defaultBilling: CustomerDataAddressSchema;
  defaultShipping: CustomerDataAddressSchema;
  mqFlex: number;
  customerDataSubscription: Subscription;
  passwordModalSubscription: Subscription;
  passwordModalHeight: string;
  passwordModalWidth: string; 
  manageAddressSubscription: Subscription;
  manageAddressHeight: string;
  manageAddressWidth: string;
  accountInfoSubscription: Subscription;
  accountInfoHeight: string;
  accountInfoWidth: string;

  constructor(private media: ObservableMedia, private _customer: CustomerService, private _mqService: MediaQueryService,
              private dialog: MatDialog) {}

   ngOnInit() {
      this.customerDataSubscription = this._customer.updateCustomer$
        .subscribe( () => {
          this.customer = this._customer.customer;
          this.defaultShipping = this._customer.defaultShipping;
          this.defaultBilling = this._customer.defaultBilling;
        })

      this.passwordModalSubscription = this._mqService.passwordModalLayoutStatus$
        .subscribe((layout: PasswordModalLayout) => {
          this.passwordModalHeight = layout.modalHeight;
          this.passwordModalWidth = layout.modalWidth;
        })
      this.manageAddressSubscription = this._mqService.manageAddressesLayoutStatus$
        .subscribe((layout: ManageAddressesLayout) => {
          this.manageAddressHeight = layout.modalHeight;
          this.manageAddressWidth = layout.modalWidth;
        })
      this.accountInfoSubscription = this._mqService.accountInfoLayoutStatus$
        .subscribe((layout: AccountInfoLayout) => {
          this.accountInfoHeight = layout.modalHeight;
          this.accountInfoWidth = layout.modalWidth;
        })
      this.watcher = this.media.subscribe((change: MediaChange) => {
        change.mqAlias === 'xs' || change.mqAlias === 'sm' || change.mqAlias === 'md' ? this.align = true : this.align = false;
      })
   }

   openItem(): void {
    let dialogRef = this.dialog.open(AccountInfoModalComponent, {
      width: this.accountInfoWidth,
      height: this.accountInfoHeight,
    });
  }
  changePassword() {
    let dialogRef = this.dialog.open(PasswordModalComponent, {
      width: this.passwordModalWidth,
      height: this.passwordModalHeight,
      data: '',
    })
  }
  
  manageAddresses(){
    let dialogRef = this.dialog.open(ManageAddressesModalComponent, {
      width: this.manageAddressWidth,
      height: this.manageAddressHeight,
      data: this.customer
    })
  }
}

interface PasswordModalLayout {
  modalHeight: string;
  modalWidth: string;
}

interface ManageAddressesLayout {
  modalHeight: string;
  modalWidth: string;
}

interface AccountInfoLayout {
  modalHeight: string;
  modalWidth: string;
}