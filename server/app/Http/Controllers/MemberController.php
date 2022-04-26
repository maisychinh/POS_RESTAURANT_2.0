<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\support\Facades\Redirect;

use App\Models\MenuItem;
use App\Models\Feedback;


session_start();

class MemberController extends Controller
{
    public function createFeedback(Request $request){
        //check Member
        $role = Session::get('role');
        if(!($role && $role == 'manager')) return Redirect::to('/api/home');

        $data['user_id'] = Session::get('user_id');
        $data['item_id'] = $request->item_id;
        $data['rating'] = $request->rating;
        if (isset($request->review)) $data['review'] = $request->review;

        $feedback = Feedback::create($data);
        $menu_item = MenuItem::findOrFail($request->item_id);
        $new_rating = ($menu_item->rating + $data['rating']) / ($menu_item->count_rating + 1);
        MenuItem::findOrFail($request->item_id)->update();
    }
}
