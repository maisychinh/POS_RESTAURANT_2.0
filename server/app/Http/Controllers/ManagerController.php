<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\support\Facades\Redirect;
use Illuminate\Support\Facades\Session;

use App\Models\MenuItem;

session_start();

class ManagerController extends Controller
{  
    public function index(){
        //check Manager
        // $role = Session::get('role');
        // if(!($role && $role == 'manager')) return Redirect::to('/api/home');

        $allItems = MenuItem::all();
        return $allItems;
    }

    public function createMenuItem(Request $request){
        //check Manager
        // $role = Session::get('role');
        // if(!($role && $role == 'manager')) return Redirect::to('/api/home');
        
        $menu_item = MenuItem::create($request->all());
        return $menu_item;
    }

    public function updateMenuItem(Request $request){
        //check Manager
        // $role = Session::get('role');
        // if(!($role && $role == 'manager')) return Redirect::to('/api/home');
        
        $item_id = $request['id'];
        MenuItem::findOrFail($item_id)->update($request->all());
        $result = MenuItem::findOrFail($item_id);
        return $result;
    }

    public function deleteMenuItem(Request $request){
        //check Manager
        // $role = Session::get('role');
        // if(!($role && $role == 'manager')) return Redirect::to('/api/home');

        $item_id = $request['id'];
        MenuItem::findOrFail($item_id)->delete();
    }
}
