<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use App\Models\User;

session_start();

class UserController extends Controller
{
    public function showLogin(){
        return "Đây là trang đăng nhập!";
    }

    public function login(Request $request){
        $email = $request->email;
        $password = MD5($request->password);
        $result = User::where('email',$email)->where('password',$password)->first();
        if($result) {
            Session::put('name', $result->name);
            Session::put('role', $result->role);
            Session::put('user_id', $result->user_id);
            Session::put('message', null);
            if($result->role == 'member') return Redirect::to('/api/order');
            else if($result->role == 'clerk') return Redirect::to('/api/clerk');
            else if($result->role == 'chef') return Redirect::to('/api/chef');
            else if($result->role == 'manager') return Redirect::to('/api/manager');
            else return Redirect::to('/api/home'); 
        }
        else {
            $request->session()->put('message', 'Tài khoản hoặc mật khẩu chưa đúng');
            return Redirect::to('/api/login');
        }
    }

    public function logout(){
        Session::put('name', null);
        Session::put('role', null);
        Session::put('user_id', null);
        return Redirect::to('/api/home');
    }

    public function register(Request $request){
        $data['email'] = $request->email;
        $data['password'] = MD5($request->password);
        $data['name'] = $request->name;
        $data['phone_number'] = $request->phone_number;
        $data['role'] = 'member';
        User::create($data);
        return $data;
    }
}
