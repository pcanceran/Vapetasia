import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CustomerService } from '../customer/customer.service';
import { CatalogServiceBase } from '../../interfaces/angular.catalog.service.base.class';
import { IAlphaOmegaGrouping, IPricing, IInventory, IProduct, IProductsGrouping, ILiquid, IApparel, IHeadwear, IPromo } from '../../interfaces/products.interfaces';

@Injectable()
export class CatalogService  implements OnInit {
  products: IAlphaOmegaGrouping[];

  catalogSet: boolean = false;
  needsPricing: boolean = false;

  //Publisher
  private _selectProductSource = new BehaviorSubject<IAlphaOmegaGrouping>({
    name: "init",
    sku: "init",
    thumbnail: "init",
    groupings: [],
    images: [],
    categories: [],
    description: "init",
    shortDescription: "init",
    productFamily: "init"});
  selectProduct$ = this._selectProductSource.asObservable();
  private _catalogSource = new BehaviorSubject<IAlphaOmegaGrouping[]>([]);
  catalog$ = this._catalogSource.asObservable();
  private _cartMapSource = new BehaviorSubject<IAlphaOmegaGrouping[]>([]);
  cartMap$ = this._cartMapSource.asObservable();

  // Subscription
  loginSubscription: Subscription;

  // Sorting --- to be replaced by more advanced method
  sortOrder = [
    "EJVTKK",
    "EJVTKS",
    "EJVTKL",
    "EJVTPE",
    "EJVTRO",
    "EJVTRR",
    "EJVTMP",
    "EJVGLB",
    "EJVGAS",
    "EJVGPG",
    "EJVPBL",
    "EJVPST",
    "EJVLPH",
    "EJVLPI",
    "EJVLBL",
    "EJFCMC",
    "EJFCHC",
    "EJFCBC",
    "EJVTSBVT",
    "EJVTSBKK",
    "EJVGSBTRI",
    "EJVPSBDB",
    "EJVLSBTRI",
    "EJFCSBTRI",
    "APTPSSVTG",
    "APTPTSKKTRIO",
    "APTPTSKKSDUO",
    "APTPTSKKUNO",
    "APTPTSROYAL",
    "APTPTSKREEZY",
    "APTPSTVTG",
    "APTPTTMTVBK",
    "APTPTTMNTVWH",
    "APTPTTWTVPK",
    "APTPTTWHTVGY",
    "APHWSBVT",
    "APHWDHVT",
    "APHWBNVT",
    "PRSK",
    "PRFM",
    "PRPT",
    "PRPB",
    "PRCD"/* ,
    "PRKC",
    "PRLY",
    "PRPS" */
  ];
  
  constructor( private http: HttpClient, private _customer: CustomerService) {
    this.products = [];

    this.getAllProducts();
    this.subscribeToLogin(); // look at more
  }

  // Lifecycles
  ngOnInit() {

  }


  // Methods

  private getAllProducts(): any {
    this.http.get('/products').subscribe((products: IAlphaOmegaGrouping[]) => {
      console.log("Products");
      console.log(products);
      //this.products = this.sortProducts(products);
    });
  }

  private getProductPricings(token: string): any {
    // this.http.get('/products/pricings').subscribe((pricings: IPricing[]) => {
    //   console.log("Pricings");
    //   console.log(pricings);
    // });
    
  }

  private setProductPricings(pricings: IPricing[]): void {
    this.products.forEach(productGroup => {
      productGroup.groupings.forEach(grouping => {
        (grouping.products as (ILiquid | IApparel | IHeadwear | IPromo)[]).forEach(
          product => {
            pricings.forEach(pricing =>{
              if(product.sku === pricing.sku){ 
                  product.price = pricing.price; 
              }
            });
          });
      });
    });
  }

  private getProductInventories(): any {
    this.http.get('/products/inventory').subscribe((inventories: IInventory[]) => {
      console.log("Inventories");
      console.log(inventories);
    });
  }

  private setProductInventories(inventories: IInventory[]): void {
    this.products.forEach(productGroup => {
      productGroup.groupings.forEach(grouping => { 
        (grouping.products as (ILiquid | IApparel | IHeadwear | IPromo)[]).forEach(
          product => {
            inventories.forEach(inventory =>{
              if(product.sku === inventory.sku){ 
                  product.inventory = inventory.inventory; 
              }
            });
          });
      });
    });
  }

  private buildProducts(): IAlphaOmegaGrouping[] | void {
 
  }

  selectProductForShopping(productGroup: IAlphaOmegaGrouping) {
    this._selectProductSource.next(productGroup);
  }

  subscribeToLogin() {
    this.loginSubscription = this._customer.loggedStatus$
    .subscribe(status => {
      if (status) {
        if (this.catalogSet) {
         // this.setProductPrice(this.products, this._customer.customer.group_id);
          this._cartMapSource.next(this.products);
        } else {
          this.needsPricing = true;
        }
      }
    })
  }
  
  sortProducts(products: IAlphaOmegaGrouping[]) {
    let sorted: IAlphaOmegaGrouping[] = [];
    for (let i = 0; i < this.sortOrder.length; i++) {
      for (let k = 0; k < products.length; k++) {
        if (products[k].sku === this.sortOrder[i]) {
          sorted.push(products[k]);
        }
      }
    }
    console.log(sorted);
    return sorted;
  }

}

