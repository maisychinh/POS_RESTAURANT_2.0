<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\support\Facades\Redirect;
use Illuminate\Support\Facades\Session;

use App\Models\MenuItem;

class ManagerController extends Controller
{  
    public function index(){
        $allItems = MenuItem::all();
        return $allItems;
    }

    public function createMenuItem(Request $request){
        $menu_item = MenuItem::create($request->all());
        return $menu_item;
    }

    public function updateMenuItem(Request $request){
        $item_id = $request['id'];
        MenuItem::findOrFail($item_id)->update($request->all());
        $result = MenuItem::findOrFail($item_id);
        return $result;
    }

    public function deleteMenuItem(Request $request){
        $item_id = $request['id'];
        MenuItem::findOrFail($item_id)->delete();
    }
}
