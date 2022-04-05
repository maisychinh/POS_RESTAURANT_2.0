<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\support\Facades\Redirect;
use Illuminate\Support\Facades\Session;

session_start();

class ManagerController extends Controller
{
    public function checkManager(){
        $role = Session::get('role');
        if($role && $role == 'manager'){
            return Redirect::to('/manager');
        }
        else{
            return Redirect::to('/home')->send();
        }
    }
    
    public function index(){
        $this->checkManager();
        return "Đây là trang của Quản lý";
    }
}
