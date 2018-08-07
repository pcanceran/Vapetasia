import { Component, OnInit, Inject } from '@angular/core';
import { CustomerService } from '../../../services/customer/customer.service';
import { SalesDataOrderSchema } from '../../../interfaces/interfaces';
import { ViewOrderComponent } from '../../modals/view-order/view-order.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: SalesDataOrderSchema[];
  
  constructor(private _customer: CustomerService, public dialog: MatDialog) {
    this.orders = _customer.orderhistory;
  }
  
  ngOnInit() {
  }

  formatDate(dateString: string) {
    let date = new Date(dateString);

    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }


  viewOrder(e, index){
    e.preventDefault();
    console.log('works');
    let dialogRef = this.dialog.open(ViewOrderComponent, {
      height: '70%',
      width: '50%',
      data: this.orders[index]
    })
  }
}
