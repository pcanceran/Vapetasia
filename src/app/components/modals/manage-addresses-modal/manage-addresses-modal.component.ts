import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomerDataCustomerSchema, CustomerDataAddressSchema } from '../../../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { AddressService } from '../../../services/address/address.service';
import { CustomerService } from '../../../services/customer/customer.service';
import { RegionCode, Country, NewAddress } from '../../../interfaces/address';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-manage-addresses-modal',
  templateUrl: './manage-addresses-modal.component.html',
  styleUrls: ['./manage-addresses-modal.component.scss']
})
export class ManageAddressesModalComponent implements OnInit {

  newAddress: NewAddress;
  customerData: CustomerDataCustomerSchema;
  addressListPure: CustomerDataAddressSchema[] = []
  addressListDirty: CustomerDataAddressSchema[] = []
  countryList: Country[];
  regionList: RegionCode[];
  selectedCountry: Country;
  selectedRegion: RegionCode;
  errorMessages: string[] = [];
  successMessages: string[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: CustomerDataCustomerSchema, public dialog: MatDialog, private _address: AddressService, private _customer: CustomerService) {
    this.addressListPure = JSON.parse(JSON.stringify(data.addresses));
    this.addressListDirty = JSON.parse(JSON.stringify(data.addresses));
    this.customerData = JSON.parse(JSON.stringify(data));
    this.countryList = _address.countryList;
    this.regionList = _address.regionCodes;
    this.setNewAddress();
  }

  ngOnInit() { }

  checkFields(index){
    this.errorMessages = [];
    this.successMessages = [];
    if (index === -1) {
        if ( !this.newAddress.firstName ||
             !this.newAddress.lastName ||
             !this.newAddress.street ||
             !this.newAddress.city ||
             !this.newAddress.zipCode ||
             !this.newAddress.telephone ||
             !this.selectedCountry ||
             !this.selectedRegion ) {
                this.errorMessages.push('Please fill out all fields');
                this.successMessages = [];
        } else {
          console.log('add address reached here!');
          this.addAddress();
        }
      
    } else {
      if(
        !this.addressListDirty[index].firstname ||
        !this.addressListDirty[index].lastname ||
        !this.addressListDirty[index].street ||
        !this.addressListDirty[index].city ||
        !this.addressListDirty[index].region ||
        !this.addressListDirty[index].postcode ||
        !this.addressListDirty[index].country_id ||
        !this.selectedCountry ||
        !this.selectedRegion) 
        {
          this.errorMessages.push('Please fill out all fields');
          this.successMessages = [];
        } else {
          this.errorMessages = [];
          this.updateAddress(index);
        }
    }
  }

  submitUpdate() {
    this.customerData.addresses = this.addressListPure;
    this._customer.updateCustomerData(this.customerData)
      .subscribe((data: CustomerDataCustomerSchema) => {
        this.successMessages.push('Address added successfully!');
        this._customer.setAndStoreCustomerData(data);
        this.addressListPure = JSON.parse(JSON.stringify(data.addresses));
        this.customerData = data;
        this.resetDirty();
        this.setNewAddress();
      },
      (error) => {
        console.log(error);
      })
  }

  updateAddress(index) {
    console.log('updating address');
    this.updateDefaults(index);
    this.addressListPure[index].firstname = this.addressListDirty[index].firstname;
    this.addressListPure[index].lastname = this.addressListDirty[index].lastname;
    this.addressListPure[index].street = this.addressListDirty[index].street;
    this.addressListPure[index].city = this.addressListDirty[index].city;
    this.addressListPure[index].region = this._address.createRegionObject(this.selectedRegion.default_name);
    this.addressListPure[index].postcode = this.addressListDirty[index].postcode;
    this.addressListPure[index].country_id = this._address.getCountryId(this.selectedRegion.default_name);
    this.addressListPure[index].default_shipping = this.addressListDirty[index].hasOwnProperty('default_shipping') ? this.addressListDirty[index].default_shipping : false;
    this.addressListPure[index].default_billing = this.addressListDirty[index].hasOwnProperty('default_billing') ? this.addressListDirty[index].default_billing : false;
    this.submitUpdate();
  }

  addAddress() {
    console.log('adding address');
    this.addressListPure.push({
      firstname: this.newAddress.firstName,
      lastname: this.newAddress.lastName,
      street: this.newAddress.street,
      city: this.newAddress.city,
      region: this._address.createRegionObject(this.selectedRegion.default_name),
      postcode: this.newAddress.zipCode,
      country_id: this._address.getCountryId(this.selectedRegion.default_name),
      telephone: this.newAddress.telephone
    });
    console.log(this.addressListPure);
    this.submitUpdate();
  }

  resetDirty() {
    this.addressListDirty = JSON.parse(JSON.stringify(this.addressListPure));
  }

  setNewAddress() {
    this.newAddress = {
      firstName: '',
      lastName: '',
      street: [''],
      city: '',
      zipCode: '',
      telephone: ''
    }
  }

  setSelected(index: number) {
    this.successMessages = [];
    this.errorMessages = [];
    let self = this;
    if (index === -1) {
      this.selectedCountry = undefined
      this.selectedRegion = undefined
    } else {
      setCountry();
      setRegion();
    }

    function setCountry() {
      for (let i = 0; i < self.countryList.length; i++) {
        if (self.countryList[i].code === self.addressListPure[index].country_id) {
          self.selectedCountry = self.countryList[i];
        }
      }
    }
    // use in checkout ts
    function setRegion() {
      for (let i = 0; i < self.regionList.length; i++) {
        if (self.regionList[i].default_name === self.addressListPure[index].region.region) {
          self.selectedRegion = self.regionList[i];
        }
      }
    }
  }

  trackByLine(index, line) {
    return index;
  }

  confirmDelete(index: number): void {
    let dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '250px',
      height: '250px',
      data: "Permanently delete address?"
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this._customer.deleteAddress(this.addressListPure[index].id)
          .subscribe((data: CustomerDataCustomerSchema) => {
            this.addressListPure.splice(index, 1);
            this.customerData.addresses = this.addressListPure;
            this._customer.setAndStoreCustomerData(this.customerData);
            this.resetDirty();
          },
          (error) => {
            console.log(error);
          })
      }
    })
  }

  updateDefaults(index) {
    let shipping: boolean = this.addressListDirty[index].default_shipping;
    let billing: boolean = this.addressListDirty[index].default_billing;

    for (let i = 0; i < this.addressListPure.length; i++) {
      if (shipping) {
        delete this.addressListPure[i].default_shipping;
      }
      if (billing) {
        delete this.addressListPure[i].default_billing;
      }
    }
  }
}