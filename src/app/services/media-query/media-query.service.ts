import { Injectable, OnInit } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs/subscription'
import { ReplaySubject  } from 'rxjs';

@Injectable()
export class MediaQueryService implements OnInit {

  perRowFlex: string;
  modalHeight: string;
  modalWidth: string;
  watcher: Subscription;
  mqAliases: any = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5
  }

  //Product Page
  private _productPageLayoutSource = new ReplaySubject <ProductPageLayout>(1);
  productLayoutStatus$ = this._productPageLayoutSource.asObservable();

  //App Component
  private _headerLayoutSource = new ReplaySubject <HeaderLayout>(1);
  headerLayoutStatus$ = this._headerLayoutSource.asObservable();

  //Cart Modal
  private _cartModalLayoutSource = new ReplaySubject <CartModalLayout>(1);
  cartModalLayoutStatus$ = this._cartModalLayoutSource.asObservable();

  //Home Page
  private _homePageLayoutSource = new ReplaySubject <HomePageLayout>(1);
  homePageLayoutStatus$ = this._homePageLayoutSource.asObservable();

  //Item View Component
  private _itemViewLayoutSource = new ReplaySubject <ItemViewLayout>(1);
  itemViewLayoutStatus$ = this._itemViewLayoutSource.asObservable();

  //Password Modal Component
  private _passwordModalLayoutSource = new ReplaySubject <PasswordModalLayout>(1);
  passwordModalLayoutStatus$ = this._passwordModalLayoutSource.asObservable();

  //Manage Addresses Modal Component
  private _manageAddressesLayoutSource = new ReplaySubject <ManageAddressesLayout>(1);
  manageAddressesLayoutStatus$ = this._manageAddressesLayoutSource.asObservable();

  //Account Info Modal Layout
  private _accountInfoLayoutSource = new ReplaySubject <AccountInfoLayout>(1);
  accountInfoLayoutStatus$ = this._accountInfoLayoutSource.asObservable();

  //Forgot Password Modal Component
  private _forgotPasswordLayoutSource = new ReplaySubject <ForgotPasswordLayout>(1);
  forgotPasswordLayoutStatus$ = this._forgotPasswordLayoutSource.asObservable();

  constructor(private media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      let mqA = this.mqAliases[change.mqAlias];

      if (mqA >= this.mqAliases.lg) { // gt-md
        this.emitLayoutGreaterThanMedium();
      } else { // lt-lg
        this.emitLayoutLessThanLarge();
        this._cartModalLayoutSource.next({ cartItemFlex: 100 })
        if (mqA === this.mqAliases.md) { // md
          this.emitLayoutMedium();
        } else { // lt-md
          this.emitLayoutLessThanMedium();
          mqA === this.mqAliases.sm ? this.emitLayoutSmall() : this.emitLayoutExtraSmall(); // sm : xs
        }
      }
    })
  }

  ngOnInit() {
    this.triggerEmit();
  }

  triggerEmit() {
    if (this.media.isActive('lg') || this.media.isActive('xl')) { // gt-md
      this.emitLayoutGreaterThanMedium();
    } else { // lt-lg
      this.emitLayoutLessThanLarge();
      this._cartModalLayoutSource.next({ cartItemFlex: 100 })
      if (this.media.isActive('md')) { // md
        this.emitLayoutMedium();
      } else { // lt-md
        this.emitLayoutLessThanMedium();
        this.media.isActive('sm') ? this.emitLayoutSmall() : this.emitLayoutExtraSmall(); // sm : xs
      }
    }
  }

  emitLayoutExtraSmall() {
    console.log('xs emit');
    this._productPageLayoutSource.next({
      productModalHeight: '100%',
      productModalWidth: '100%',
      perRowFlex: 80,
      productListFlex: 100
    })
    this._cartModalLayoutSource.next({
      cartItemFlex: 100
    })
    this._homePageLayoutSource.next({
      containerFlex: 100,
      titleFlex: 80,
      brandContainerFlex: 80,
      brandImageFlex: 30
    })
    this._passwordModalLayoutSource.next({
      modalHeight: '60%',
      modalWidth: '85%'
    })
    this._manageAddressesLayoutSource.next({
      modalHeight: '80%',
      modalWidth: '80%'
    })
    this._accountInfoLayoutSource.next({
      modalHeight: '60%',
      modalWidth: '80%'
    })
  }

  emitLayoutSmall() {
    console.log('sm emit');
    this._productPageLayoutSource.next({
      productModalHeight: '100%',
      productModalWidth: '100%',
      perRowFlex: 100,
      productListFlex: 100
    })
    this._passwordModalLayoutSource.next({
      modalHeight: '60%',
      modalWidth: '85%'
    })
    this._manageAddressesLayoutSource.next({
      modalHeight: '80%',
      modalWidth: '80%'
    })
    this._accountInfoLayoutSource.next({
      modalHeight: '60%',
      modalWidth: '80%'
    })
    this._forgotPasswordLayoutSource.next({
      modalHeight: '30%',
      modalWidth: '75%'
    })
  }

  emitLayoutMedium() {
    console.log('md emit');
    this._productPageLayoutSource.next({
      productModalHeight: '80%',
      productModalWidth: '60%',
      perRowFlex: 40,
      productListFlex: 80
    })
    this._headerLayoutSource.next({
      logoFlex: 30,
      buttonGroupFlex: 30,
      subButtonGroupFlex: 100,
      modalHeight: '80%',
      modalWidth: '60%'
    })
    this._cartModalLayoutSource.next({
      cartItemFlex: 45
    })
    this._passwordModalLayoutSource.next({
      modalHeight: '45%',
      modalWidth: '50%'
    })
    this._manageAddressesLayoutSource.next({
      modalHeight: '50%',
      modalWidth: '55%'
    })
    this._accountInfoLayoutSource.next({
      modalHeight: '45%',
      modalWidth: '35%'
    })
    this._forgotPasswordLayoutSource.next({
      modalHeight: '25%',
      modalWidth: '50%'
    })
  }

  emitLayoutGreaterThanMedium() {
    console.log('lg emit');
    this._productPageLayoutSource.next({
      productModalHeight: '80%',
      productModalWidth: '60%',
      perRowFlex: 25,
      productListFlex: 80
    })
    this._headerLayoutSource.next({
      logoFlex: 20,
      buttonGroupFlex: 20,
      subButtonGroupFlex: 50,
      modalHeight: '80%',
      modalWidth: '60%'
    })
    this._homePageLayoutSource.next({
      containerFlex: 60,
      titleFlex: 100,
      brandContainerFlex: 100,
      brandImageFlex: 15
    })
    this._itemViewLayoutSource.next({
      imageContainerFlex: 40,
      productInfoFlex: 40
    })
    this._passwordModalLayoutSource.next({
      modalHeight: '45%',
      modalWidth: '25%'
    }),
    this._manageAddressesLayoutSource.next({
      modalHeight: '60%',
      modalWidth: '35%'
    })
  }

  emitLayoutLessThanMedium() {
    console.log('lt-md emit');
    this._productPageLayoutSource.next({
      productModalHeight: '100%',
      productModalWidth: '100%',
      perRowFlex: 100,
      productListFlex: 100
    })
    this._headerLayoutSource.next({
      logoFlex: 40,
      buttonGroupFlex: 40,
      subButtonGroupFlex: 50,
      modalHeight: '80%',
      modalWidth: '60%'
    })
    this._homePageLayoutSource.next({
      containerFlex: 80,
      titleFlex: 80,
      brandContainerFlex: 100,
      brandImageFlex: 30
    })
    this._itemViewLayoutSource.next({
      imageContainerFlex: 80,
      productInfoFlex: 80
    })
  }

  emitLayoutLessThanLarge() {
    console.log('lt-lg emit');
    this._homePageLayoutSource.next({
      containerFlex: 80,
      titleFlex: 100,
      brandContainerFlex: 100,
      brandImageFlex: 15
    })
    this._forgotPasswordLayoutSource.next({
      modalHeight: '30%',
      modalWidth: '75%'
    })
  }
}

interface PasswordModalLayout {
  modalHeight: string;
  modalWidth: string;
}

interface ProductPageLayout {
  productModalHeight: string;
  productModalWidth: string;
  perRowFlex: number;
  productListFlex: number;
}

interface HeaderLayout {
  logoFlex: number;
  buttonGroupFlex: number;
  subButtonGroupFlex: number;
  modalHeight: string,
  modalWidth: string
}

interface CartModalLayout {
  cartItemFlex: number;
}

interface HomePageLayout {
  containerFlex: number;
  titleFlex: number;
  brandContainerFlex: number;
  brandImageFlex: number;
}

interface ItemViewLayout {
  imageContainerFlex: number;
  productInfoFlex: number;
}

interface DefaultAddressLayout {
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

interface ForgotPasswordLayout {
  modalHeight: string;
  modalWidth: string;
}