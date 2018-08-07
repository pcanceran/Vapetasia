import { Pipe, PipeTransform } from '@angular/core';
import { RegionCode, Country } from '../../interfaces/address';

@Pipe({
  name: 'region'
})
export class RegionPipe implements PipeTransform {

  transform(regions: RegionCode[], country: Country): any {
    if (country) {
      return regions.filter(region => region.country_id === country.code);
    } else {
      return;
    }
  }

}
