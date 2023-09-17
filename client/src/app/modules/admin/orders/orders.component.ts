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
    });
  }

  getAllOrderDetails() {
    return this._orderService.getAllOrdersDetails().subscribe((data) => {
      this.orderDetails = [...data];
      this.getDetailsByOrderId(6);
      console.log(this.orderDetailsByOrder);
    });
  }

  getDetailsByOrderId(orderId: number) {
    // console.log(orderId);
    this.orderDetails.forEach((orderDetail) => {
      // console.log(orderDetail.order_Id);
      if (orderId == orderDetail.order_id) {
        this.orderDetailsByOrder.push(orderDetail);
      }
    });
    // console.log(this.orderDetails);
  }
}
