<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\support\Facades\Redirect;
use Illuminate\Support\Facades\Session;

session_start();

class ChefController extends Controller
{
    public function checkChef(){
        $role = Session::get('role');
        if($role && $role == 'chef'){
            return Redirect::to('/chef');
        }
        else{
            return Redirect::to('/home')->send();
        }
    }
    
    public function index(){
        $this->checkChef();
        return "Đây là trang của Đầu Bếp";
    }
}
