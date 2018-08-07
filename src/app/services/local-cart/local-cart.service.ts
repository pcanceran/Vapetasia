import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Cart } from '../../interfaces/cart';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CatalogService } from '../catalog/catalog.service';
import { QuoteDataCartSchema, QuoteDataCartItemSchema } from '../../interfaces/interfaces';
import { Subscription, BehaviorSubject } from 'rxjs';
import { IAlphaOmegaGrouping, IProduct, IProductsGrouping, ILiquid, IApparel, IHeadwear, IPromo } from '../../interfaces/products.interfaces';

@Injectable()
export class LocalCartService {
  localCart: Cart;
  cartMapSubscription: Subscription;
  cartQueue: { product: IProduct , remove: boolean }[];
  queueActive: boolean;
  private _queueStatusSource = new BehaviorSubject<boolean>(false);
  queueStatus$ = this._queueStatusSource.asObservable();
  private _cartCountSource = new BehaviorSubject<number>(null);
  cartCount$ = this._cartCountSource.asObservable();

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private _catalog: CatalogService) {
    this.queueActive = false;
    this.cartQueue = [];
    this.localCart = {
      cartId: 0,
      items: [],
      count: 0,
      subtotal: 0
    }

    this.cartMapSubscription = _catalog.cartMap$
      .subscribe((products: IAlphaOmegaGrouping[]) => {
        if (products.length !== 0) {
          this.mapMageCart(products);
        }
      })
  }

  addItems(productGroup: IAlphaOmegaGrouping, isMap: boolean) {
    let itemsAdded = 0;
    let productsAdded = 0;
    productGroup.groupings.forEach(grouping => {

      if (!grouping.hasOwnProperty("inCart")) {
        grouping.inCart = false;
      }

       // grouping.products.forEach(product => {
      //   if (product.hasOwnProperty("qty")) {
      //     grouping.inCart = true;
      //     if (product.hasOwnProperty("inCart")) {
      //       product.inCart += product.qty;
      //       itemsAdded += product.qty;
      //     } else {
      //       product.inCart = product.qty;
      //       itemsAdded += product.qty;
      //       productsAdded++;
      //     }
      //     if (!isMap) {
      //       this.cartQueue.push({ product: product, remove: false });
      //       this.processQueue();
      //     }
      //     delete product.qty;
      //   }
      // });
      
      (grouping.products as (ILiquid | IApparel | IHeadwear | IPromo)[]).forEach(
        product => {
          if(product.hasOwnProperty("qty")){
            grouping.inCart = true;
            if(product.hasOwnProperty("inCart")){
             product.inCart += product.qty;
             itemsAdded += product.qty;
            } else {
              product.inCart = product.qty;
              itemsAdded += product.qty;
              productsAdded++;
            }
            if(!isMap){
              this.cartQueue.push({product: product, remove: false});
              this.processQueue();
            }
            delete product.qty;
          }
      });

    });

    let shouldAdd = true;
    this.localCart.items.forEach(item => {
      if (item.sku === productGroup.sku) {
        shouldAdd = false;
      }
    });
    if (shouldAdd) {
      this.localCart.items.push(productGroup);
    }
    if (itemsAdded > 0 && !isMap) {
      this.snackBar.open(itemsAdded + " items added to cart.", "Okay", { // productsAdded + " products added."
        verticalPosition: "top",
        duration: 3000,
        politeness: "assertive"
      });
    }
    this.calculateSubtotalAndCount();
  }

  removeItem(product: IProduct): boolean {
    delete product.inCart;
    this.checkForEmpty();
    this.calculateSubtotalAndCount();
    this.cartQueue.push({ product: product, remove: true });
    this.processQueue();

    if (this.localCart.items.length === 0) {
      return true;
    }
  }

  clearCart() { // require confirmation
    this.localCart.items = [];
    this.localCart.subtotal = 0;
  }

  checkForEmpty() {
    let items = this.localCart.items;

    for (let i = 0; i < items.length; i++) {
      let hasGroupings = false;
      for (let k = 0; k < items[i].groupings.length; k++) {
        let hasItems = false;
        // items[i].groupings[k].products.forEach(product => {
        //   if (product.hasOwnProperty('inCart')) {
        //     hasItems = true;
        //   }
        // });
        if( items[i].groupings[k].products.hasOwnProperty('inCart')) {
            hasItems = true;
        }
        if (!hasItems) {
          items[i].groupings[k].inCart = false;
        } else {
          hasGroupings = true;
        }
      }
      if (!hasGroupings) { // change to handle multiple
        items.splice(i, 1);
        break;
      }
    }
  }

  calculateSubtotalAndCount() {
    let subtotal = 0;
    let count = 0;

    this.localCart.items.forEach(item => {
      item.groupings.forEach(grouping => {
        // grouping.products.forEach(product => {
        //   if (product.hasOwnProperty('inCart')) {
        //     subtotal += product.inCart * product.customerPrice;
        //     count++;
        //   }
        // })
        (grouping.products as (ILiquid | IApparel | IHeadwear | IPromo)[]).forEach(
          product => {
            if(product.hasOwnProperty('inCart')) {
              subtotal += product.inCart * product.customerPrice;
              count++;
            }
        })
      
      })
    })
    this.localCart.subtotal = subtotal;
    this.localCart.count = count;
    this._cartCountSource.next(count);
  }

  addToQueue(sku: string, qty: number, method: string) {

  }

  mapMageCart(products: IAlphaOmegaGrouping[]) {
    let self = this;
    let mageCart: QuoteDataCartSchema;
    this.http.get('/cart').subscribe(
      (cart: QuoteDataCartSchema) => {
        console.log(cart);
        this.localCart.cartId = cart.id;
        mageCart = cart;
        mapping(mageCart.items, products);
      },
      (error: HttpErrorResponse) => { 
        if (error.status === 404) {
          this.http.post('/cart', {}).subscribe(
            () => {
              this.http.get('/cart').subscribe(
                (cart: QuoteDataCartSchema) => {
                  this.localCart.cartId = cart.id;
                  mageCart = cart;
                  mapping(mageCart.items, products);
                })
            })
        }
      })

    function mapping(items: QuoteDataCartItemSchema[], productGroups: IAlphaOmegaGrouping[]) {
      productGroups.forEach(productGroup => {
        let shouldAddItems: boolean = false;
        productGroup.groupings.forEach(grouping => {
          // grouping.products.forEach(product => {
          //   items.forEach(item => {
          //     if (item.sku === product.sku) {
          //       product.qty = item.qty;
          //       product.item_id = item.item_id;
          //       shouldAddItems = true;
          //     }
          //   })
          // })
          (grouping.products as (ILiquid | IApparel | IHeadwear | IPromo)[]).forEach(
            product => {
              items.forEach(item => {
                if(item.sku == product.sku){
                  product.qty = item.qty;
                  product.item_id = item.item_id;
                  shouldAddItems = true;
                }
            })
          })
        })
        if (shouldAddItems) {
          self.addItems(productGroup, true);
        }
      })
    }
  }

  processQueue(recursive?: boolean) {
    if (!this.queueActive || recursive) {
      this.queueActive = true;
      this._queueStatusSource.next(true);
      let updateItem = this.cartQueue[0];
      let body: any = {};
      let product = updateItem.product;
      let route = updateItem.remove !== true ? '/cart/add' : '/cart/remove';

      body.quote_id = this.localCart.cartId;
      body.sku = product.sku;
      body.qty = updateItem.product.inCart;
      if (product.item_id) {
        body.item_id = product.item_id;
      }

      if (updateItem.remove !== true) {
        this.http.post('/cart/add', body).subscribe(
          (response: any) => {
            product.item_id = response.item_id;
            this.cartQueue.splice(0, 1);
            if (this.cartQueue.length > 0) {
              this.processQueue(true);
            } else {
              this.queueActive = false;
              this._queueStatusSource.next(false);
            }
          },
          (error) => {
            console.log('Error ' + error);
          }
        )
      } else {
        this.http.post('/cart/remove', { id: product.item_id }).subscribe(
          (response: any) => {
            console.log('remove: ' + response)
            this.cartQueue.splice(0, 1);
            if (this.cartQueue.length > 0) {
              this.processQueue(true);
            } else {
              this.queueActive = false;
              this._queueStatusSource.next(false);
            }
          },
          (error) => {
            console.log('Error ' + error);
          }
        )
      }
    }
  }
}
