import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules  } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { SupportTicketPageComponent } from './pages/support-ticket-page/support-ticket-page.component';
import { PasswordResetPageComponent } from './pages/password-reset-page/password-reset-page.component';
import { AuthGuard } from './services/auth/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'products/:type', component: ProductsPageComponent, canActivate: [AuthGuard] },
  { path: 'account', component: AccountPageComponent, canActivate: [AuthGuard] },
  { path: 'order-checkout', component: CheckoutPageComponent, canActivate: [AuthGuard] },
  { path: 'support-ticket', component: SupportTicketPageComponent, canActivate: [AuthGuard] },
  { path: 'password-reset', component: PasswordResetPageComponent, canActivate: [AuthGuard] },
  { path: 'password-reset/:id/:token', component: PasswordResetPageComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}