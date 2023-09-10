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
        $orderDetails = [];
        $total = 0;
        $name='';
        $email='';
        $phone='';
        $address='';
        $date='';


        foreach ($body as $b) {
            $product = Products::findOrFail($b['product_id']);
            $subTotal=$product['price']*$b['product_quantity'];
            $total += $subTotal-$subTotal*$b['discount'];
            $name=$b['customer_name'];
            $email = $b['customer_email'];
            $phone=$b['customer_phone'];
            $address=$b['customer_address'];
            $date=$b['date'];

            $orderDetail = [
                'price' => $subTotal,
                'discount' => $b['discount'],
                'final_price' => $total,
                'product_quantity' => $b['product_quantity'],
            ];

            $orderDetails[] = $orderDetail;
        }

        $order = Order::create([
            'customer_name'=>$name,
            'customer_email'=>$email,
            'customer_phone'=>$phone,
            'customer_address'=>$address,
            'status'=>'pending',
            'date'=>$date,
        ]);

        $response = [];

        foreach ($orderDetails as $od) {
            $od['order_id'] = $order->id;
            $orderDetail = OrderDetails::create([$od]);
            $response[] = $orderDetail;
        }

        return response()->json($response, 201);

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
}
