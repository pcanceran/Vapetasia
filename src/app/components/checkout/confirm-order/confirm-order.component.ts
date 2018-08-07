import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocalCartService } from '../../../services/local-cart/local-cart.service';
import { MediaQueryService } from '../../../services/media-query/media-query.service';
import { CheckoutService } from '../../../services/checkout/checkout.service';
import { PaymentInfo, PaymentProfile, ButtonStatus } from '../../../interfaces/checkout';
import { QuoteDataAddressSchema, QuoteDataTotalsSchema } from '../../../interfaces/interfaces';
import { Cart } from '../../../interfaces/cart';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss']
})
export class ConfirmOrderComponent implements OnInit {
  @Input() payment: any;
  @Input() cartTotal: QuoteDataTotalsSchema;
  @Input() paymentInfo: PaymentInfo;
  @Input() paymentProfile: PaymentProfile;
  @Input() buttonStatus: ButtonStatus;
  @Output() navigateTabs = new EventEmitter<number>();
  @Output() placeOrderOutput = new EventEmitter<boolean>();
  @Input() shippingAddress: QuoteDataAddressSchema;
  @Input() billingAddress: QuoteDataAddressSchema;
  @Input() newCard: NewCard;
  isNewCard: boolean;
  localCart: Cart;
  checkoutUpdateSubscription: Subscription;
  cartItemsLayoutSubscription: Subscription;
  cartItemFlex: number;

  constructor(private _cart: LocalCartService, _mqService: MediaQueryService, private _checkout: CheckoutService) {
    this.localCart = _cart.localCart;
    this.cartItemsLayoutSubscription = _mqService.cartModalLayoutStatus$.subscribe((layout: CartModalLayout) => {
      this.cartItemFlex = layout.cartItemFlex;
    });
  }

  ngOnInit() {
    this.checkoutUpdateSubscription = this._checkout.checkoutInfo$.subscribe(() => {
      this.shippingAddress = this._checkout.shippingAddress;
      console.log(this._checkout.shippingAddress);
    });
  }

  getLastFour(cardNumber: string) {
    const cLen = cardNumber.length;
    return cardNumber.substring(cLen - 4, cLen);
  }

  switchTabs(index: number) {
    this.navigateTabs.emit(index);
  }

  placeOrder() {
    this.placeOrderOutput.emit(true);
  }
}

interface CartModalLayout {
  cartItemFlex: number;
}

interface NewCard {
  cc_cid: string;
  cc_number: string;
  save: boolean;
}
