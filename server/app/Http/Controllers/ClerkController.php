<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\support\Facades\Redirect;
use Illuminate\Support\Facades\Session;

session_start();

class ClerkController extends Controller
{
    public function checkClerk(){
        $role = Session::get('role');
        if($role && $role == 'clerk'){
            return Redirect::to('/clerk');
        }
        else{
            return Redirect::to('/home')->send();
        }
    }
    
    public function index(){
        $this->checkClerk();
        return "Đây là trang của Nhân Viên";
    }
}
