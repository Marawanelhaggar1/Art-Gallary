export interface FInal_Orders {
  order: Order;
  order_details: OrderDetails[];
}

export interface Order {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string;
  status: string;
  date: Date;
}

export interface OrderDetails {
  product_quantity: number;
  product_id: number;
}
