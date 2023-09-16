<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderDetails;
use App\Models\Products;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function create( Request $request){
        $body = $request->all();
        $customerDetails =$body['order'];
        $order = Order::create($customerDetails);
        $id = $order->id;
        $subtotal = 0;
        $total = 0;
        $productOrders = [];

        foreach($body['order_details'] as $order){
            $product = Products::findOrFail($order['product_id']);
            $order['order_id'] = $id;
            $order['price'] = $product['price'];
            $order['discount'] = $product['discount'];
            $subtotal = $order['price'] * $order['product_quantity'];
            $order['final_price']=$subtotal;

            $total += $subtotal;
            $productOrders[] = $order;
            OrderDetails::create($order);
        }
        $all = [
            'customer_data' =>$customerDetails,
            'data' => $productOrders,
            'total_price' => $total,
        ];
        return $all;
    }

    public function delete($id){
        $order=Order::findOrFail($id);

        if($order->status =='pending'){
            $order->forceDelete();
            return response()->json([
                'message' => 'Order deleted successfully'
            ]);
        }else{
            return response()->json([
                'message' => 'Order Can not be deleted '
            ]);
        }
    }

    public function getOrder($id){
        $order=Order::findOrFail($id);
        return $order;
    }

    public function getAllOrders(){
        $order = Order::all();
        return $order;
    }

    public function getAllOrdersDetails(){
         $order_details = OrderDetails::all();
        return $order_details;
    }
}
