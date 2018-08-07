import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from '../customer/customer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private customerService: CustomerService, private router: Router){}

  canActivate(): boolean{
    if(this.customerService.isLoggedIn()){ //if logged in, token is present, it returns true
      return true
    } else  {
      this.router.navigate(['']) //if not, token is not present, return false, redirect to home
      return false
    }
  }

}
