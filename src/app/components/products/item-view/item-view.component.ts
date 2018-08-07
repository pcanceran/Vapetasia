import { Component, OnInit, Inject, SimpleChanges, Input } from '@angular/core';
import { Group } from '../../../interfaces/product-group';
import { LocalCartService } from '../../../services/local-cart/local-cart.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { CatalogService } from '../../../services/catalog/catalog.service';
import { Subscription } from 'rxjs';
import { IAlphaOmegaGrouping, IProductsGrouping } from '../../../interfaces/products.interfaces';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {
  @Input() logged: boolean;
  @Input() productGroup: IAlphaOmegaGrouping;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  selectedGrouping: IProductsGrouping;
  image: string;
  gallerySet: boolean;
  selectProductSubscription: Subscription;

  constructor(private _localCart: LocalCartService, private _catalog: CatalogService) {
    this.gallerySet = false;
  }

  ngOnInit() {

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      },
      {
        breakpoint: 500,
        width: "300px",
        height: "300px",
        thumbnailsColumns: 3
      },
      {
        breakpoint: 300,
        width: "100%",
        height: "200px",
        thumbnailsColumns: 2
      },
      {
        imageAnimation: "slide",
        imageSize: "contain",
        imageArrows: true,
        imageSwipe: true,
        thumbnailsArrows: false,
        thumbnailsSwipe: true,
        previewSwipe: true,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        previewZoom: true,
        previewRotate: false
      }
    ];

    this.selectProductSubscription = this._catalog.selectProduct$
      .subscribe(product => {
        this.selectedGrouping = null;
        this.productGroup = product;
        if (this.productGroup.groupings.length === 1) {
          this.selectGroup(this.productGroup.groupings[0]);
        }
        this.setGallery(this.productGroup.images);
      });
  }

  // add disable/enable button
  addItems(productGroup: IAlphaOmegaGrouping) {
    this._localCart.addItems(productGroup, false);
  }

  selectGroup(grouping: IProductsGrouping) {
    this.selectedGrouping = grouping;
  }

  setGallery(images: string[]) {
    if (this.gallerySet) {
      while (this.galleryImages.length > 0) {
        this.galleryImages.pop();
        this.galleryImages = this.galleryImages.slice(0); // activates change detection
      }
    } else {
      this.galleryImages = new Array();
    }

    for (let i = 0; i < images.length; i++) {
      let image = images[i];
      let imageGroup: NgxGalleryImage = {
        small: '',
        medium: '',
        big: ''
      }
      if (image.includes('MINI')) {
        continue;
      } else {
        imageGroup.big = image;
        imageGroup.medium = image;
        imageGroup.small = image.split('').splice(0, image.length - 4).join('') + 'MINI.jpg';
      }
      this.galleryImages.push(imageGroup);
      this.gallerySet = true;
    }
  }
}