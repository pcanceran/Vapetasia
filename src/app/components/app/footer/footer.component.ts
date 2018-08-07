import { Component, OnInit } from '@angular/core';
import { InfoModalComponent } from '../../modals/info-modal/info-modal.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  returnPolicy: any = {
    title: 'Return Policy',
    section: [{
      title: '',
      section: [
        'Customer service is a top priority here at Vapetasia! You may return any defective items within 30 days of receipt indicated by your tracking information. Our policy covers any manufacturer defective items, dead on arrival items and items that do not appear as listed on the website.',
        'Items damaged by mis-use or improper care are not covered by our policy! If you received items that you do not know how to use, please feel free to contact us for proper care instructions and more in-depth information on your items.',
        'Please note that return shipping is not pre-paid, therefore, you will be responsible for the return shipping cost. In addition, return shipping is non-refundable; unless you received wrong item(s). Should you receive the wrong item(s), please contact us as soon as you realize the error via email at info@vapetasia.com. Please provide a picture of the invoice and items received, if available.',
        'We will gladly send out a replacement of the original item(s) purchased, at no cost, as long as the merchandise is available. If the merchandise is not available, you will receive a refund to the original form of payment used to make your online purchase. Returns must include all items that originally came with your item.',
        'All returns are subject to case by case exceptions. Please contact us if you are having a problem with your items and we will do our very best to help you out.'
      ]
    },
    {
      title: 'How To Return Items to Vapetasia.com',
      section: ['Securely pack your merchandise in a box or envelope of your choice (you may also use the original package if possible). Please include your name, contact information and order number. Mail your online returns to the following address:',
        'Vapetasia LLC.',
        '3990 W Russell Rd.',
        'Suite #8',
        'Las Vegas, NV',
        '89118',
        'We highly recommend using a carrier service that provides order tracking.',
      ]
    }
    ]
  }

  termsAndConditions: any = {
    title: 'Terms & Conditions',
    section: [
      {
        title: 'General',
        section: ['The products offered by Vapetasia are intended for use by responsible adult users over the age of 18 (and the legal smoking age of your state), and are not intended for pregnant or nursing women, children, people with or at risk for heart disease, high blood pressure, diabetes, asthma, or those who are sensitive to nicotine, propylene glycol, or vegetable glycerin. Nicotine is highly addictive and may be dangerous to your health. Nicotine is highly addictive and habit forming. Keep out of reach of children and pets.',
          'Any persons using, reading, and/or purchasing products on this website agree that access to and use of this site are subject to the following terms, conditions, and other applicable laws. You must be at least 18 years old to purchase products from this site. By using this website, you agree that you are at least 18 years of age and also agree to the following terms and conditions. If you do not agree to these terms and conditions, please do not use this site.',
          'If you have a demonstrated allergy or sensitivity to nicotine or any combination of inhalants, consult your physician before using this product. This product is sold purely for recreational purposes - it is not a smoking cessation product and has not been tested as such.,',
        ]
      },
      {
        title: 'Right To Use',
        section: ['Vapetasia complies with all state, federal, and international regulations surrounding the use, distribution, and production of E-Liquid types products. Because laws are subject to change based on region, your use of this website implies that you are doing so legally and in accordance with the laws of your region. Additionally, Vapetasia maintains a strict policy of “18 and Older” for both the usage of this web site, ordering, and the using of any Vapetasia products. You use or ordering from this website is your digital signature that you are above the age of 18, and are legally entitled to use this product in your region.',
          'Copyright The entire content included in this site, including but not limited to text, graphics or code is copyrighted as a collective work under the United States and other copyright laws, and is the property of Vapetasia, The collective work includes works that are licensed to Vapetasia Permission is granted to electronically copy and print hard copy portions of this site for the sole purpose of placing an order with Vapetasia or purchasing Vapetasia products. You may display and, subject to any expressly stated restrictions or limitations relating to specific material, download or print portions of the material from the different areas of the site solely for your own non-commercial use, or to place an order with Vapetasia or to purchase Vapetasia products. Any other use, including but not limited to the reproduction, distribution, display or transmission of the content of this site is strictly prohibited, unless authorized by Vapetasia. You further agree not to change or delete any proprietary notices from materials downloaded from the site.',
          'Limitation of Liability Vapetasia shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products, even if Vapetasia has been advised of the possibility of such damages. Applicable law may not allow the limitation of exclusion of liability or incidental or consequential damages, so the above limitation or exclusion may not apply to you.',
          'Typographical Errors In the event that a Vapetasia product is mistakenly listed at an incorrect price, Vapetasia reserves the right to refuse or cancel any orders placed for product listed at the incorrect price. Vapetasia reserves the right to refuse or cancel any such orders whether or not the order has been confirmed and your credit card charged. If your credit card has already been charged for the purchase and your order is cancelled, Vapetasia shall issue a credit to your credit card account in the amount of the incorrect price.',
          'Termination These terms and conditions are applicable to you upon your accessing the site and/or completing the registration or shopping process. These terms and conditions, or any part of them, may be terminated or changed by Vapetasia without notice at any time, for any reason. The provisions relating to Copyrights, Trademark, Disclaimer, Limitation of Liability, Indemnification and Miscellaneous, shall survive any termination.',
        ]
      },
      {
        title: 'Notice',
        section: ['Vapetasia may deliver notice to you by means of e-mail, a general notice on the site, or by other reliable method to the address you have provided to Vapetasia. Use of Site',
          'Harassment in any manner or form on the site, including via e-mail, chat, or by use of obscene or abusive language, is strictly forbidden. Impersonation of others, including a Vapetasia or other licensed employee, host, or representative, as well as other members or visitors on the site is prohibited. You may not upload to, distribute, or otherwise publish through the site any content which is libelous, defamatory, obscene, threatening, invasive of privacy or publicity rights, abusive, illegal, or otherwise objectionable which may constitute or encourage a criminal offense, violate the rights of any party or which may otherwise give rise to liability or violate any law. You may not upload commercial content on the site or use the site to solicit others to join or become members of any other commercial online service or other organization.',
        ]
      },
      {
        title: 'Participation Disclaimer',
        section: ['Vapetasia does not and cannot review all communications and materials posted to or created by users accessing the site, and is not in any manner responsible for the content of these communications and materials. You acknowledge that by providing you with the ability to view and distribute user-generated content on the site, Vapetasia is merely acting as a passive conduit for such distribution and is not undertaking any obligation or liability relating to any contents or activities on the site. However, Vapetasia reserves the right to block or remove communications or materials that it determines to be (a) abusive, defamatory, or obscene, (b) fraudulent, deceptive, or misleading, (c) in violation of a copyright, trademark or; other intellectual property right of another or (d) offensive or otherwise unacceptable to Vapetasia in its sole discretion.',
          'You agree to indemnify, defend, and hold harmless Vapetasia, its officers, directors, employees, agents, licensors and suppliers (collectively the “Service Providers”) from and against all losses, expenses, damages and costs, including reasonable attorneys’ fees, resulting from any violation of these terms and conditions or any activity related to your account (including negligent or wrongful conduct) by you or any other person accessing the site using your Internet account.',
          'In an attempt to provide increased value to our visitors, Vapetasia may link to sites operated by third parties. However, even if the third party is affiliated with Vapetasia, Vapetasia has no control over these linked sites, all of which have separate privacy and data collection practices, independent of Vapetasia. These linked sites are only for your convenience and therefore you access them at your own risk. Nonetheless, Vapetasia seeks to protect the integrity of its web site and the links placed upon it and therefore requests any feedback on not only its own site, but for sites it links to as well (including if a specific link does not work).',
          'Use of this website shall in all respects be governed by the laws of the state of California, U.S., regardless of the laws that might be applicable under principles of conflicts of law. The parties agree that the California courts located in San Diego County, California, shall have exclusive jurisdiction over all controversies arising under this agreement and agree that venue is proper in those courts.',
          'Vapetasia reserves the right to refuse service to any person for any reason, with or without notice, with or without cause at any time. Additionally, Vapetasia reserves the right to block or ban any IP address, any credit card, any shipping address, and any person from the website for any reason at any time at the sole discretion of Vapetasia Additionally, Vapetasia also reserves the right to permanently delete any member account, and block said person from re-establishing access to the website. Additionally, Vapetasia reserves the right to substitute a refund or account credit in direct exchange for products ordered by a person to whom service has been refused before or after the time of refusal of service.',
          'Your use of this site shall be governed in all respects by the laws of the state of Las Vegas, U.S.A., without regard to choice of law provisions, and not by the 1980 U.N. Convention on contracts for the international sale of goods. You agree that jurisdiction over and venue in any legal proceeding directly or indirectly arising out of or relating to this site (including but not limited to the purchase of Vapetasia products) shall be in the state or federal courts located in Laas Vegas, NV. Any cause of action or claim you may have with respect to the site (including but not limited to the purchase of Vapetasia products) must be commenced within one (1) year after the claim or cause of action arises. Vapetasia’s failure to insist upon or enforce strict performance of any provision of these terms and conditions shall not be construed as a waiver of any provision or right. Neither the course of conduct between the parties nor trade practice shall act to modify any of these terms and conditions. Vapetasia may assign its rights and duties under this Agreement to any party at any time without notice to you.',
          'Vapetasia reserves the right to update these terms at anytime with or without notice. In all cases, the current most terms and conditions of use shall be construed as the governing policy.',
          'Vapetasia LLC.',
          '3990 W Russel Rd, Unit 5',
          'Las Vegas, NV 89118',
          '(702) 769-1139'
        ]
      },

    ]  

}
privacyPolicy: any = {
  title: 'Privacy Policy',
  section: [
    {
      title: '',
      section: [
        'This privacy policy sets out how www.vapetasia.com uses and protects any information that you give www.vapetasia.com when you use this website. www.vapetasia.com is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement. www.vapetasia.com may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.'
      ]
      },
      {
        title: 'What We Collect',
        section: ['We may collect the following information:',
        '-Name, Contact Information including E-Mail Address',
        '-Demographic information such as postcode, preferences and interests',
        '-Other information relevant to customer surveys and/or offers',
        'For the exhaustive list of cookies we collect see the List of cookies we collect section.',
        'What We Do With the Information We Gather',
        'We require this information to understand your needs and provide you with a better service, and in particular for the following reasons.'
      ]
      },
      {
        title: 'Internal Record Keeping',
        section:['We may use the information to improve our products and services. We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided. From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customize the website according to your interests.']
      },
      {
        title:'Security',
        section:['We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.',
        'How we use cookies. A cookie is a small file which asks permission to be placed on your computer’s hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.',
        'We use traffic log cookies to identify which pages are being used. This helps us analyse data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.',
        'Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.',
        'Links to other websites Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.',
        'Controlling Your Personal Information You may choose to restrict the collection or use of your personal information in the following ways:',
        'Whenever you are asked to fill in a form on our website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes if you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at support@vapetasia.com',
        'We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.',
        'If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.',
      ]
      },
      {
        title: 'Cookies We Collect',
        section:['Below lists the cookies we collect and what information they store.',
        'COOKIE NAME: cookie description ',
        'CART: The association with your shopping cart.',
        'COMPARE: The items that you have in the Compare Products list.',
        'CURRENCY: Your preferred currency',
        'CUSTOMER: An encrypted version of your customer id with the store.',
        'CUSTOMER_AUTH: An indicator if you are currently logged into the store.',
        'CUSTOMER_INFO: An encrypted version of the customer group you belong to.',
        'CUSTOMER_SEGMENT_IDS: Stores the Customer Segment ID',
        'EXTERNAL_NO_CACHE: A flag, which indicates whether caching is disabled or not.',
        'FRONTEND: You sesssion ID on the server.',
        'GUEST-VIEW: Allows guests to edit their orders.',
        'LAST_CATEGORY: The last category you visited.',
        'LAST_PRODUCT: The most recent product you have viewed.',
        'NEWMESSAGE: Indicates whether a new message has been received.',
        'NO_CACHE: Indicates whether it is allowed to use cache.',
        'PERSISTENT_SHOPPING_CART: A link to information about your cart and viewing history if you have asked the site.',
        'POLL: The ID of any polls you have recently voted in.',
        'POLLN: Information on what polls you have voted on.',
        'RECENTLYCOMPARED: The items that you have recently compared.',
        'STF: Information on products you have emailed to friends.',
        'STORE: The store view or language you have selected.',
        'USER_ALLOWED_SAVE_COOKIE: Indicates whether a customer allowed to use cookies.',
        'VIEWED_PRODUCT_IDS: The products that you have recently viewed.',
        'WISHLIST: An encrypted list of products added to your Wishlist.',
        'WISHLIST_CNT: The number of items in your Wishlist.        '

      ]
     
      }
  ]
}

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  scrollToTop() {
    let nav = document.getElementById('nav');
    nav.scrollIntoView();
  }


  openInfoModal(info) {
    let dialogRef = this.dialog.open(InfoModalComponent, {
      width: '60%',
      height: '80%',
      data: info
    })
  }
}