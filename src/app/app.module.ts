import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

/* Routes */
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { SupportTicketPageComponent } from './pages/support-ticket-page/support-ticket-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { PasswordResetPageComponent } from './pages/password-reset-page/password-reset-page.component';
/* Routes */


/* Components */
// App
import { SideNavComponent } from './components/app/side-nav/side-nav.component';
import { FooterComponent } from './components/app/footer/footer.component';
import { HeaderComponent } from './components/app/header/header.component';
import { LoginComponent } from './components/app/login/login.component';
// Modals
import { AccountInfoModalComponent } from './components/modals/account-info-modal/account-info-modal.component';
import { InfoModalComponent } from './components/modals/info-modal/info-modal.component';
import { PasswordModalComponent } from './components/modals/password-modal/password-modal.component';
import { ManageAddressesModalComponent } from './components/modals/manage-addresses-modal/manage-addresses-modal.component';
import { ConfirmationModalComponent } from './components/modals/confirmation-modal/confirmation-modal.component';
import { ForgotPasswordComponent } from './components/modals/forgot-password/forgot-password.component';
import { WholesaleInquiryComponent } from './components/modals/wholesale-inquiry/wholesale-inquiry.component';
import { ViewOrderComponent } from './components/modals/view-order/view-order.component';
// Products
import { ItemViewComponent } from './components/products/item-view/item-view.component';
import { ItemGroupingComponent } from './components/products/item-grouping/item-grouping.component';
import { LiquidFilterComponent } from './components/products/liquid-filter/liquid-filter.component';
// Checkout
import { ShippingMethodComponent } from './components/checkout/shipping-method/shipping-method.component';
import { PaymentComponent } from './components/checkout/payment/payment.component';
import { ConfirmOrderComponent } from './components/checkout/confirm-order/confirm-order.component';
import { BillingAddressComponent } from './components/checkout/billing-address/billing-address.component';
// Cart
import { CartComponent } from './components/cart/cart.component';
// Account
import { DashboardComponent } from './components/account/dashboard/dashboard.component';
import { OrdersComponent } from './components/account/orders/orders.component';
import { SavedCartsComponent } from './components/account/saved-carts/saved-carts.component';
/* Components */

/* Auth Guard */
import { AuthGuard } from './services/auth/auth.guard';

/* Services */
import { CatalogService } from './services/catalog/catalog.service';
import { CustomerService } from './services/customer/customer.service';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { LocalCartService } from './services/local-cart/local-cart.service';
import { AddressService } from './services/address/address.service';
import { MediaQueryService } from './services/media-query/media-query.service';
import { CheckoutService } from './services/checkout/checkout.service';
/* Services */


/* Pipes */
import { ProductTypePipe } from './pipes/product-type/product-type.pipe';
import { LiquidBrandPipe } from './pipes/liquid-brand/liquid-brand.pipe';
import { CartItemPipe } from './pipes/cart-item/cart-item.pipe';
import { RegionPipe } from './pipes/region/region.pipe';
/* Pipes */


/* Angular Material */
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule,
         MatMenuModule,
         MatDialogModule,
         MatExpansionModule,
         MatListModule,
         MatTooltipModule,
         MatRadioModule,
         MatSnackBarModule,
         MatFormFieldModule,
         MatInputModule,
         MatTabsModule,
         MatSelectModule,
         MatStepperModule, 
         MatCheckboxModule,
         MatDividerModule,
         MatSidenavModule,
         MatProgressSpinnerModule,
         MatProgressBarModule,
         MatBadgeModule } from '@angular/material';
/* Angular Material */

/* Gallery */
import { NgxGalleryModule } from 'ngx-gallery';
/* Card */
import { CardModule } from 'ngx-card/ngx-card';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsPageComponent,
    PageNotFoundComponent,
    ItemViewComponent,
    CartComponent,
    AccountPageComponent,
    LoginComponent,
    ItemGroupingComponent,
    CheckoutPageComponent,
    SupportTicketPageComponent,
    DashboardComponent,
    OrdersComponent,
    SavedCartsComponent,
    SideNavComponent,
    ProductTypePipe,
    LiquidFilterComponent,
    LiquidBrandPipe,
    AccountInfoModalComponent,
    FooterComponent,
    HeaderComponent,
    ShippingMethodComponent,
    InfoModalComponent,
    PaymentComponent,
    CartItemPipe,
    ConfirmOrderComponent,
    PasswordModalComponent,
    ManageAddressesModalComponent,
    RegionPipe,
    ConfirmationModalComponent,
    BillingAddressComponent,
    PasswordResetPageComponent,
    ForgotPasswordComponent,
    WholesaleInquiryComponent,
    ViewOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatRadioModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatCheckboxModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatBadgeModule,
    NgxGalleryModule,
    CardModule

  ],
  providers: [ 
    AuthGuard,
    CatalogService,
    CustomerService,
    LocalCartService,
    AddressService,
    MediaQueryService,
    CheckoutService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  entryComponents: [
    AccountInfoModalComponent,
    InfoModalComponent,
    PasswordModalComponent,
    ManageAddressesModalComponent,
    ConfirmationModalComponent,
    ForgotPasswordComponent,
    WholesaleInquiryComponent,
    ViewOrderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
