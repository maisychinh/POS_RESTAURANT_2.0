<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use App\Models\User;

session::start();
class UserController extends Controller
{
    public function login(Request $request){
        $email = $request->email;
        $password = MD5($request->password);
        $result = User::where('email',$email)->where('password',$password)->first();
        if($result) {
            Session::put('role', 'manager');
            unset($result->password);
            return $result;
        }
        else {
            return Redirect::to('/api/login');
        }
    }

    public function logout(){
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
