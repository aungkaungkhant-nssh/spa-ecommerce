<?php

namespace App\Http\Controllers\Backend\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Support\Facades\Auth;

class AdminAuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest:admin')->except('logout');
    }
    
    public function showLogin(){
        return view("auth.backendlogin");
    }
    public function login(Request $request){
        $request->validate([
            "email"=>"required",
            "password"=>"required"
        ]);
        if(Auth::guard("admin")->attempt([
            "email"=>$request->email,
            "password"=>$request->password,
        ])){
            return success("Login Success",null);
        }else{
            return fail("These credentail do not match our record",403);
        }
    }
    public function logout(){
         Auth::guard("admin")->logout();
         return success("Admin Logout success",null);
    }
}
