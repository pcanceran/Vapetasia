import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {
  id: string;
  token: string;
  email: string;

  constructor(private http: HttpClient) { }

  setReset(id: string, token: string) {
    this.id = id;
    this.token = token;
  }

  validateToken() {
    return this.http.post('/customer/validate-token', {
      "customerId": this.id,
      "resetPasswordLinkToken": this.token
    })
  }

  resetForgotten(newPassword) {
    return this.http.post('/customer/password/reset-forgotten', {
      'email': this.email,
			'resetToken': this.token,
			'newPassword': newPassword
    })
  }
}