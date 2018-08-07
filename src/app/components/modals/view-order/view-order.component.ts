import { Component, OnInit, Inject } from '@angular/core';
import { SalesDataOrderSchema, SalesDataOrderItemSchema } from '../../../interfaces/interfaces';
import { CustomerService } from '../../../services/customer/customer.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { CatalogService } from '../../../services/catalog/catalog.service';
import { ProductGroup } from '../../../interfaces/product-group';
import { IAlphaOmegaGrouping, ILiquid, IApparel, IHeadwear, IPromo } from '../../../interfaces/products.interfaces';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {

  items: CustomSalesDataOrderItemSchema[];
  //products: ProductGroup[];
  products: IAlphaOmegaGrouping[];
  images: string[] = [];
  date: string = '';
  // trackingNumber: string = '1Z082Y234323942050';
  shippingInfo: any = this.order.extension_attributes.shipping_assignments[0].shipping.address;
  //include state of
  constructor(private _customer: CustomerService, @Inject(MAT_DIALOG_DATA) public order: SalesDataOrderSchema,
    private _catalog: CatalogService, public dialog: MatDialog) {
   
    this.products = _catalog.products;
    this.items = order.items;
    this.items.forEach(item => {
      item.image = this.findImages(item.sku);
    })
    this.date = this.formatDate(order.created_at);
  }

  ngOnInit() {
   console.log(this.items);
   console.log(this.order);
  }


  findImages(sku) {

    let image: string;

      this.products.forEach(product => {
        product.groupings.forEach(grouping => {
          (grouping.products as (ILiquid | IApparel | IHeadwear | IPromo)[]).forEach(
            product => {
              if(sku === product.sku){
                console.log('this works');
                image = grouping.images[0];
              }
            })
          
          // grouping.products.forEach(subproduct => {
          //   if (sku === subproduct.sku) {
          //     console.log('this works');
          //     image = grouping.images[0];
          //   }
          // })
        })
      })
    
    return image;
  }
  formatDate(str) {
    let dateString = str.split(' ').join().split('-').join().split(',');
    dateString.pop();
    console.log(dateString);
    dateString.push(dateString.shift());
    return dateString.join('/');
    }
  /* openTracking(e){
    e.preventDefault();
    let dialogRef = this.dialog.open(TrackingModalComponent, {
      width: "40%",
      height: "35%"
    })
  } */

  // openWindow(e) {
  //   e.preventDefault();
  //   let upsWindow = window.open(`http://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=${this.trackingNumber}#fontControl`, 'ups', 'width=500, height=500');
  
  //   upsWindow.onload = function(){
  //     let element = upsWindow.document.getElementById("newpkgProgress");
  //     console.log(element);
  //     element.scroll(0, 1000);
  //   };
  //   // setTimeout(upsWindow.scrollBy(0, 5000), 5000);
  // }
}


interface CustomSalesDataOrderItemSchema extends SalesDataOrderItemSchema {
  image?:string
}