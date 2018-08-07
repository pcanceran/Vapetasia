import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
import { CustomerService } from '../../../services/customer/customer.service';
import { LocalCartService } from '../../../services/local-cart/local-cart.service';
import { CatalogService } from '../../../services/catalog/catalog.service';
import { Router } from '@angular/router';
import { MediaQueryService } from '../../../services/media-query/media-query.service';
import { WholesaleInquiryComponent } from '../../modals/wholesale-inquiry/wholesale-inquiry.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideCart = new EventEmitter<boolean>();
  @Output() toggleSideNav = new EventEmitter<boolean>();
  logged: boolean;
  productView: string;
  loginSubscription: Subscription;
  layoutSubscription: Subscription;
  cartCountSubscription: Subscription;
  cartCount: number;
  logoFlex: number;
  buttonGroupFlex: number;
  subButtonGroupFlex: number;
  modalHeight: string;
  modalWidth: string;

  constructor(private catalog: CatalogService, public dialog: MatDialog, private _localCart: LocalCartService, private snackBar: MatSnackBar,
              private _customer: CustomerService, private _catalog: CatalogService, private router: Router, private _mqService: MediaQueryService) {
                  this.logged = false;

                  this.layoutSubscription = _mqService.headerLayoutStatus$
                    .subscribe( (layout: AppLayout) => {
                      console.log(layout);
                      this.logoFlex = layout.logoFlex;
                      this.buttonGroupFlex = layout.buttonGroupFlex;
                      this.subButtonGroupFlex = layout.subButtonGroupFlex;
                      this.modalHeight = layout.modalHeight;
                      this.modalWidth = layout.modalWidth;
                    })
              }

  ngOnInit() {
    this.loginSubscription = this._customer.loggedStatus$
       .subscribe(status => this.logged = status );

    this.cartCountSubscription = this._localCart.cartCount$
      .subscribe( count => this.cartCount = count );
  }

  toggleNav() {
    this.toggleSideNav.emit(true);
  }

  toggleCart() {
    if (this._localCart.localCart.items.length === 0) {
      this.snackBar.open( "Cart is empty.", "Okay", {
        verticalPosition: "top",
        duration: 3000,
        politeness: "assertive"
      });
    } else {
      this.toggleSideCart.emit(true);
    }
  }

  logout() {
    this._customer.logout();
  }

  setProductView(view: string) {
    this.router.navigate(['products', view]);
  }

  checkout() {
    this.router.navigate(['order-checkout']);
  }

  goHome() {
    this.router.navigate(['home']);
  }

  openApplication(){
    let dialogRef = this.dialog.open(WholesaleInquiryComponent, {
      height: '70%',
      width: '50%'
    })
  }
}

interface AppLayout {
  logoFlex: number;
  buttonGroupFlex: number;
  subButtonGroupFlex: number;
  modalHeight: string,
  modalWidth: string
}