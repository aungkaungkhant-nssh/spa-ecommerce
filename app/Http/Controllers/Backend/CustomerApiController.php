<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class CustomerApiController extends Controller
{
    public function index(){
        $customers=User::all();
        return success("Customer get Success",$customers);
    }
    public function destroy($id){
        if($id){
            $customer=User::find($id)->delete();
           return success("Customer Delete Success",$customer);
        }
    }
}
