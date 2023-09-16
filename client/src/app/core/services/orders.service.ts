import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FInal_Orders, OrderDetails, Order } from '../models/orders';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private _http: HttpClient, private _Cookie: CookieService) {}

  getAllOrders(): Observable<Order[]> {
    return this._http.get<Order[]>('http://localhost:8000/api/orders', {
      headers: {
        Authorization:
          'Bearer ' + JSON.parse(this._Cookie.get('user')).data.token,
      },
    });
  }

  getAllOrdersDetails(): Observable<OrderDetails[]> {
    return this._http.get<OrderDetails[]>(
      'http://localhost:8000/api/orders/order/details',
      {
        headers: {
          Authorization:
            'Bearer ' + JSON.parse(this._Cookie.get('user')).data.token,
        },
      }
    );
  }

  createOrder(body: any): Observable<FInal_Orders> {
    return this._http.post<FInal_Orders>('http://localhost:8000/api/orders', {
      headers: {
        Authorization:
          'Bearer ' + JSON.parse(this._Cookie.get('user')).data.token,
      },
      body,
    });
  }

  getOrderById(id: number): Observable<Order> {
    return this._http.get<Order>(`http://localhost:8000/api/orders/${id}`, {
      headers: {
        Authorization:
          'Bearer ' + JSON.parse(this._Cookie.get('user')).data.token,
      },
    });
  }
}
