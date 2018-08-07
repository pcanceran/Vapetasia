import { Component, OnInit } from '@angular/core';
import { MediaQueryService } from '../../services/media-query/media-query.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  containerFlex: number;
  titleFlex: number;
  brandContainerFlex: number;
  brandImageFlex: number;
  layoutSubscription: Subscription;
  pageInfo = [
    {
      title: "FREE SHIPPING",
      image: "https://dev17d.vapetasia.com/media/home-page/icon/Shipping.png",
      text: "When you place an order that is over $500, domestic shipping will be waived. " +
            "This way you’ll be able to order more without having to worry about the cost of " +
            "having it sent to you. This is just one way we say thank you to our devoted wholesalers. " +
            "Receive more when you order more."
    },
    {
      title: "RISK FREE EXCHANGE",
      image: "https://dev17d.vapetasia.com/media/home-page/icon/Risk_Free.png",
      text: "Purchase our E-Liquids without stress or commitment. Try any of our Premium " +
            "E-Liquids for 30 days or our regular E-Liquid lines for 60 days, Risk Free! Exchange " +
            "them for other products on our site if the performance is unsatisfactory. " +
            "Ask your sales rep to know what conditions may apply."
    },
    {
      title: "REWARDS PROGRAM",
      image: "https://dev17d.vapetasia.com/media/home-page/icon/Pricing.png",
      text: "Vapetasia offers a special Rewards Program for all of our Wholesale Customers. " +
            "Our Rewards Program is designed to Thank You for your support! " +
            "Earn rewards points for our unique E-Liquids, Apparel, and Promotional Material. " +
            "Ask your Sales Representative about this today!"
    }
  ]
  brandImages = [
    'https://dev17d.vapetasia.com/media/home-page/brands/Vapetasia235x90.png',
    'https://dev17d.vapetasia.com/media/home-page/brands/vape-parfait.png',
    'https://dev17d.vapetasia.com/media/home-page/brands/fruit-n-custard.png',
    'https://dev17d.vapetasia.com/media/home-page/brands/Lemonade235x90.png',
    'https://dev17d.vapetasia.com/media/home-page/brands/vape-goodies.png'
  ]

  constructor(_mqService: MediaQueryService) {
    this.layoutSubscription = _mqService.homePageLayoutStatus$.subscribe((layout: HomePageLayout) => {
      this.containerFlex = layout.containerFlex;
      this.titleFlex = layout.titleFlex;
      this.brandContainerFlex = layout.brandContainerFlex;
      this.brandImageFlex = layout.brandImageFlex;
    })
  }

  ngOnInit() {}

}

interface HomePageLayout {
  containerFlex: number;
  titleFlex: number;
  brandContainerFlex: number;
  brandImageFlex: number;
}