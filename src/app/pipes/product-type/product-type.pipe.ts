import { Pipe, PipeTransform } from '@angular/core';
import { IAlphaOmegaGrouping, IProduct } from '../../interfaces/products.interfaces';

@Pipe({
  name: 'productType'
})
export class ProductTypePipe implements PipeTransform {

  transform(products: IProduct[], view: string): any {
    return products.filter(product => product.type === view);
  }
}
