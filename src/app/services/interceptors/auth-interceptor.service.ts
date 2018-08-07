
import {throwError as observableThrowError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  
  constructor() { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("intercepted request ... ");
    if (localStorage.getItem('access-token')) {
      // Clone the request to add the new header.
      const authReq = req.clone({ headers: req.headers.set("x-access-token", localStorage.getItem('access-token'))});
      console.log("Sending request with new header now ...");
      return next.handle(authReq).pipe(
      catchError((error, caught) => {
        //intercept the response error and display it to the console
        console.log("Error Occurred");
        console.log(error);
        //return the error to the method that called it
        return observableThrowError(error);
      })) as any;
    } else {
      return next.handle(req).pipe(
      catchError((error, caught) => {
        //intercept the respons error and displace it to the console
        console.log("Error Occurred");
        console.log(error);
        //return the error to the method that called it
        return observableThrowError(error);
      })) as any;
    }
  }
}