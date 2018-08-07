import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { toggleCollapsedAnimations } from '../../../animations/toggle-collapse.animation';
import { Group } from '../../../interfaces/product-group';
import { IProductsGrouping } from '../../../interfaces/products.interfaces';

@Component({
  selector: 'app-item-grouping',
  templateUrl: './item-grouping.component.html',
  styleUrls: ['./item-grouping.component.scss'],
  animations: [ toggleCollapsedAnimations() ]
})
export class ItemGroupingComponent implements OnInit {
  @Input() grouping: IProductsGrouping;
  @Input() type: string;
  @Input() subType: string;
  @Output() qtyChange = new EventEmitter<boolean>();
  title: string;
  itemCollapsedState: string;
  toggleButton: string;
  constructor() {
    this.itemCollapsedState = "closed";
    this.toggleButton = "expand_less";
  }

  ngOnInit() {
  }

  toggleCollapse() {
    this.itemCollapsedState = this.itemCollapsedState === "open" ? "closed" : "open";
    this.toggleButton = this.toggleButton === "expand_more" ? "expand_less" : "expand_more";
  }

  qtyChanged() {
    this.qtyChange.emit(true);
  }
}
