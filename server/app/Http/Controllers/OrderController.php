<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use App\Models\Order;
use App\Models\MenuItem;

class OrderController extends Controller
{
    //GET: /order
    //Trả về trang đặt hàng
    public function index(){
        $allItems = MenuItem::where('enable', true)->get();
        return $allItems;
    }

    //POST: /order/create
    //Đưa đơn hàng vào db
    public function create(Request $request){
        $order = Order::create($request->all());
        return $order;
    }

    //POST: /order/payment-method
    //Chọn hình thức thanh toán
    public function choosePaymentMethod(Request $request){
        $order_id = $request->order_id;
        $payment_method = $request->payment_method;

        $order = Order::findOrFail($order_id);
        if($order->status == 'approved'){
            $order->update(['payment_method' => $payment_method, 'status' => 'paid']);
        }
        return $order;
    }

    //GET: /order/{id}
    //Xem chi tiết đơn hàng
    public function show($id){
        $order = Order::findOrFail($id);
        return $order;
    }
}
