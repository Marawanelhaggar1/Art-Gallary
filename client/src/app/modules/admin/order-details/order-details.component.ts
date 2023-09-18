import { Component, OnInit } from '@angular/core';
import { OrderDetailsAdmin } from 'src/app/core/models/orders';
import { OrdersService } from 'src/app/core/services/orders.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent {
  orderDetails: any[] = [];
  orderDetailsByOrder: OrderDetailsAdmin[] = [];
  constructor(
    private _dialog: MatDialog,
    private _orderService: OrdersService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.getAllOrderDetails();
  }

  getDetailsByOrderId(orderId: number) {
    this.orderDetailsByOrder = [];
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

  getAllOrderDetails() {
    return this._orderService.getAllOrdersDetails().subscribe((data) => {
      this.orderDetails = [...data];
      this.getDetailsByOrderId(this.data.id);
      console.log(this.orderDetails);
    });
  }

  closeDialog() {
    this._dialog.closeAll();
  }
}
