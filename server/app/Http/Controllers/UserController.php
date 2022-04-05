<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\support\Facades\Redirect;
use Illuminate\Support\Facades\Session;

session_start();

class UserController extends Controller
{
    public function login(){
        return view('user.login');
    }

    public function check(Request $request){
        $user_name = $request->user_name;
        $password = MD5($request->password);
        $result = DB::table('users')->where('user_name',$user_name)->where('password',$password)->first();
        if($result) {
            Session::put('user_name', $result->user_name);
            Session::put('role', $result->role);
            Session::put('user_id', $result->user_id);
            Session::put('message', null);
            if($result->role == 'member') return Redirect::to('/make-order');
            else if($result->role == 'clerk') return Redirect::to('/clerk');
            else if($result->role == 'chef') return Redirect::to('/chef');
            else if($result->role == 'manager') return Redirect::to('/manager');
            else return Redirect::to('/home');
        }
        else{
            $request->session()->put('message', 'Tài khoản hoặc mật khẩu chưa đúng');
            return Redirect::to('/login');
        }
    }

    public function logout(){
        Session::put('user_name', null);
        Session::put('role', null);
        Session::put('user_id', null);
        return Redirect::to('/home');
    }

    public function signin(){
        return view('user.signin');
    }
}
