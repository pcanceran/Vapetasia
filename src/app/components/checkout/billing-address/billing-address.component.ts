import { Component, OnInit, Input } from '@angular/core';
import { AddressService } from '../../../services/address/address.service';
import { CustomerService } from '../../../services/customer/customer.service';
import { RegionCode, Country, NewAddress } from '../../../interfaces/address';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.scss']
})
export class BillingAddressComponent implements OnInit {
  @Input() newAddress: any;
  @Input() info: string;
  @Input() addressFormGroup: FormGroup;
  countryList: Country[];
  regionList: RegionCode[];
  selectedCountry: Country;
  selectedRegion: any;

  constructor(private _address: AddressService, private _customer: CustomerService) {
    this.countryList = _address.countryList;
    this.regionList = _address.regionCodes;    
  }

  ngOnInit() {
    console.log(this.info); 
    console.log(this.newAddress);
    this.setSelectedCountry();
    console.log(this.newAddress);
  }

  trackByLine(index, line) {
    return index;
  }
  
  
  // setNewAddressRegion(selectedRegion: RegionCode) {
  //   this.newAddress.selectedRegion = selectedRegion;
  // }

  setSelectedCountry(){
    this.selectedCountry = this.countryList[0]
  }


}
