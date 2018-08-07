import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { slideOutRight } from '../../animations/slide-out-right.animation';
import { LocalCartService } from '../../services/local-cart/local-cart.service';
import { Cart } from '../../interfaces/cart';
import { MediaQueryService } from '../../services/media-query/media-query.service';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: [ slideOutRight() ]
})

export class CartComponent implements OnInit {
  @Output() closeCart = new EventEmitter<boolean>();
  animation: string = 'hi';
  localCart: Cart;
  cartItemsLayoutSubscription: Subscription;
  editMode: boolean = false;
  cartItemFlex: number;
  selectedIndexArray: any = [];
  selectedProduct: boolean;
  selectedProducts: any = [];

  constructor(private _cart: LocalCartService, _mqService: MediaQueryService, private router: Router) {
    this.localCart = _cart.localCart;
    this.cartItemsLayoutSubscription = _mqService.cartModalLayoutStatus$.subscribe((layout: CartModalLayout) => {
      this.cartItemFlex = layout.cartItemFlex;
    })
  }

  ngOnInit() {
    console.log(this.selectedIndexArray);
    console.log(this.localCart);
  }

  toggleEdit(itemIndex, groupIndex, rowIndex) {
    if (this.selectedIndexArray[itemIndex].grouping[groupIndex][rowIndex] === false) {
      this.selectedIndexArray[itemIndex].grouping[groupIndex][rowIndex] = true;
    } else {
      this.selectedIndexArray[itemIndex].grouping[groupIndex][rowIndex] = false;
    }
  }

  setSelectedProduct(product) {
    product.qty = product.inCart;
    this.selectedProducts.push(product);
    console.log(this.selectedProducts);
  }

  removeSelectedProduct(itemIndex) {
    this.selectedProducts.splice(itemIndex, 1);
  }

  deleteItem(product) {
    if (this._cart.removeItem(product)) {
      this.closeCart.emit(true);
    }
  }

  updateItem(product) {
    if (product.qty > 0) {
      product.inCart = product.qty;
      delete product.qty;
      this._cart.cartQueue.push({ product: product, remove: false });
      this._cart.processQueue();
      this._cart.calculateSubtotalAndCount();
    } else {
      delete product.qty;
      this._cart.removeItem(product);
    }
  }

  checkout() {
    this.router.navigate(['order-checkout']);
    this.closeCart.emit(true);
  }
}

interface CartModalLayout {
  cartItemFlex: number;
}