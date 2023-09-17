export interface FInal_Orders {
  order: Order;
  order_details: OrderDetails[];
}

export interface Order {
  id: number;
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

export interface OrderDetailsAdmin {
  created_at: Date;
  discount: number;
  final_price: number;
  id: number;
  order_id: number;
  price: number;
  product_id: number;
  product_quantity: number;
  updated_at: Date;
}
