<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use App\Models\Order;

class ClerkController extends Controller
{   
    //GET: /clerk
    //Trả về danh sách các đơn hàng chờ duyệt
    public function index(){
        $listOders = Order::whereIn('status', ['waitting'])->get();
        return $listOders;
    }

    //GET: /clerk/get-all-orders
    //Trả về danh sách tất cả đơn hàng
    public function getAllOrders(){
        $allOrders = Order::all();
        return $allOrders;
    }

    //POST: /clerk/approve/{id}
    //Duyệt đơn hàng
    public function approveOrder($id){
        $order = Order::findOrFail($id);
        if($order->status == 'waitting'){
            $order->update(['status' => 'approved']);
        }
        return $order;
    }

    //POST: /clerk/cancel/{id}
    //Không duyệt đơn hàng
    public function cancelOrder($id){
        $order = Order::findOrFail($id);
        if($order->status == 'waitting'){
            $order->update(['status' => 'cancelled']);
        }
        return $order;
    }
}
