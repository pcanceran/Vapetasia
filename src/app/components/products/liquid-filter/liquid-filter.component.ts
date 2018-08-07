import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-liquid-filter',
  templateUrl: './liquid-filter.component.html',
  styleUrls: ['./liquid-filter.component.scss']
})
export class LiquidFilterComponent implements OnInit {
  liquidFilter: any = [
    /*{
      section: 'Flavor Profile',
      sectionItems: [
        'Fruity',
        'Creamy',
        'Nutty'
      ]
    },*/
    {
      title: 'Size',
      sectionItems: [
        '60ml',
        '100ml'
      ]
    }
  ]

  brands = {
    title: 'Brand',
    sectionItems: [
      'All',
      'Vapetasia',
      'Vape Goodies',
      'Vape Parfait',
      'Vape Lemonade',
      'Fruit N Custard',
      'Sample Box'
    ]
  }
  @Output() onBrandSelect = new EventEmitter<string>();
  active: string;

  constructor() { }

  ngOnInit() {
    this.active = 'All';
  }

  filterBrand(brand: string) {
    console.log('filter event');
    this.onBrandSelect.emit(brand);
    this.active = brand;
  }

}
