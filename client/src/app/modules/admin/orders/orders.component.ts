import { Component, OnInit } from '@angular/core';
import {
  Order,
  OrderDetails,
  OrderDetailsAdmin,
} from 'src/app/core/models/orders';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  orders: Order[] = [];
  orderDetails: any[] = [];
  orderDetailsByOrder: OrderDetailsAdmin[] = [];
  constructor(private _orderService: OrdersService) {}

  ngOnInit() {
    this.getAllOrders();
    this.getAllOrderDetails();
  }

  getAllOrders() {
    return this._orderService.getAllOrders().subscribe((data) => {
      this.orders = [...data];
      console.log(this.orders);
    });
  }

  getAllOrderDetails() {
    return this._orderService.getAllOrdersDetails().subscribe((data) => {
      this.orderDetails = [...data];
      console.log(this.orderDetails);
    });
  }

  getDetailsByOrderId(orderId: number) {
    this.orderDetails.forEach((orderDetail) => {
      if (
        orderId == orderDetail.order_id &&
        !this.orderDetailsByOrder.includes(orderDetail)
      ) {
        this.orderDetailsByOrder.push(orderDetail);
      }
    });
    console.log(this.orderDetailsByOrder);
  }
}
