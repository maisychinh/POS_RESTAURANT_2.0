<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\support\Facades\Redirect;

use App\Models\MenuItem;
use App\Models\Feedback;

class MemberController extends Controller
{
    public function createFeedback(Request $request){
        $feedback = Feedback::create($request->all());
        return $feedback;
    }

    public function deleteFeedback(Request $request){
        $feedback_id = $request['feedback_id'];
        $feedback = Feedback::findOrFail($feedback_id);
        if($request->user_id == $feedback->user_id){
            $feedback->delete();
            return "Da xoa feedback";
        }
        else return "Khong the xoa feedback nay";
    }

    public function updateFeedback(Request $request){
        $feedback_id = $request->feedback_id;
        $review = $request->review;
        
        $feedback = Feedback::findOrFail($feedback_id);
        if($request->user_id == $feedback->user_id){
            $feedback->update(['review' => $review]);
            return $feedback;
        }
        else return "Khong the chinh sua feedback nay";
    }
}
