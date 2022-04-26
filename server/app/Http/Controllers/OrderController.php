<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use App\Models\Order;
use App\Models\MenuItem;

session_start();

class OrderController extends Controller
{
    //GET: /order
    //Trả về trang đặt hàng
    public function index(){
        $allItems = MenuItem::where('enable', true)->get();
        return $allItems;
    }

    //GET: /order/payment
    //Trả về trang thanh toán
    public function payment(){
        return 'Day la trang payment';
    }

    //POST: /order/create
    //Đưa đơn hàng vào db
    public function create(Request $request){
        $order = Order::create($request->all());
        return $order;
        // $data['user_id'] = $request['user_id'];
        // $data['user_name'] = $request['user_name'];
        // $data['items'] = $request['items'];
        // $data['payment_method'] = $request['payment_method'];
        // $data['status'] = $request['status'];

        // $total = 0;
        // $count = 0;
        // foreach($request['items'] as $item){
        //     $total_this_item = 0;
        //     $this_item = MenuItem::find($item['item']);
        //     $data['items'][$count]['item'] = $this_item;
        //     $total_this_item += $this_item['price'];
        //     foreach($item['extras'] as $extra){
        //         foreach($this_item['extras'] as $this_item_extra) {
        //             if($this_item_extra['name'] == $extra){
        //                 $total_this_item += $this_item_extra['price'];
        //             }
        //         }
        //     }
        //     $total += $total_this_item * $item['quantity'];
        //     $count++;
        // }
        // $data['total'] = $total;
    }

    //POST: /order/payment-method
    //Chọn hình thức thanh toán
    public function choosePaymentMethod(Request $request){
        $order_id = $request->order_id;
        $payment_method = $request->payment_method;
        Order::findOrFail($order_id)->update(['payment_method' => $payment_method]);
        $result = Order::findOrFail($order_id);
        return $result;
    }

    //GET: /order/{id}
    //Xem chi tiết đơn hàng
    public function show($id){
        $order = Order::findOrFail($id);
        return $order;
    }
}
