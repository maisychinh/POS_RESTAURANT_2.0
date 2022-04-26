<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use App\Models\Order;

session_start();

class ChefController extends Controller
{   
    //GET: /chef
    //Trả về danh sách các đơn hàng đã thanh toán và đang nấu
    public function index(){
        //check Chef
        // $role = Session::get('role');
        // if(!($role && $role == 'chef')) return Redirect::to('/api/home');

        $listOders = Order::wherIn('status', ['paid', 'cooking'])->get();
        return $listOders;
    }

    //GET: /chef/all
    //Trả về danh sách tất cả đơn hàng
    public function allOrder(){
        //check Chef
        // $role = Session::get('role');
        // if(!($role && $role == 'chef')) return Redirect::to('/api/home');

        $allOrders = Order::all();
        return $allOrders;
    }

    //POST: /chef/cook/{id}
    //Bắt đầu nấu
    public function cookDishesInOrder($id){
        //check Chef
        // $role = Session::get('role');
        // if(!($role && $role == 'chef')) return Redirect::to('/api/home');

        $order = Order::findOrFail($id);
        if($order->status == 'paid'){
            $order->update(['status' => 'cooking']);
        }
        Redirect::to('/api/chef');
    }

    //POST: /chef/complete/{id}
    //Đã xong
    public function completeOrder($id){
        //check Chef
        // $role = Session::get('role');
        // if(!($role && $role == 'chef')) return Redirect::to('/api/home');
        
        $order = Order::findOrFail($id);
        if($order->status == 'cooking'){
            $order->update(['status' => 'completed']);
        }
        Redirect::to('/api/chef');
    }


}
