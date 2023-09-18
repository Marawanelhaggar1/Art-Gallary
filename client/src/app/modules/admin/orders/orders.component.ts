import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  Order,
  OrderDetails,
  OrderDetailsAdmin,
} from 'src/app/core/models/orders';
import { OrdersService } from 'src/app/core/services/orders.service';
import { OrderDetailsComponent } from '../order-details/order-details.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  orders: any[] = [];
  orderDetails: any[] = [];
  orderDetailsByOrder: OrderDetailsAdmin[] = [];
  constructor(
    private _orderService: OrdersService,
    private _dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllOrders();
  }

  getAllOrders() {
    return this._orderService.getAllOrders().subscribe((data) => {
      this.orders = [...data];
      console.log(this.orders);
    });
  }

  openDialog(id: number) {
    let dialogRef = this._dialog.open(OrderDetailsComponent, {
      width: '330px',
      height: '400px',
      data: {
        id: id,
      },
    });
  }

  deleteOrder(id: number) {
    return this._orderService.deleteOrder(id).subscribe((data) => {
      console.log(data);
      window.location.reload();
    });
  }
}
