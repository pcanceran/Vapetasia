import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../interfaces/product-group';
import { IProduct } from '../../interfaces/products.interfaces';

@Pipe({
  name: 'cartItem',
  pure: false
})
export class CartItemPipe implements PipeTransform {

  transform(products: IProduct[], view: string): any {
    return products.filter(product => product.hasOwnProperty('inCart'));
  }
}
