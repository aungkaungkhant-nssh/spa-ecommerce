<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\JsonResponse;
use Session;
class UserAuthController extends Controller
{
    public function register(Request $request){
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'phone' => ['required', 'string',  'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'max:16'],
        ]);
        $user= User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone'=>$request->phone,
            'password' => Hash::make($request->password),
        ]);
        
        $token= $user->createToken("spa ecommerce")->plainTextToken;
        return success("Register Success",$token);
    }
    public function login(Request $request){
        $request->validate([
            "email"=>["required","email"],
            "password"=>["required","string"]
        ]);
        if(Auth::attempt(["email"=>$request->email,"password"=>$request->password])){
            $user=auth()->user();
            $token=$user->createToken("spa ecommerce")->plainTextToken;
            return success("Login Success",$token);
        }
        return fail("These Credential do not match our records",422);
    }
    public function logout(){
        try {
            Session::flush();
            $success = true;
            $message = 'Successfully logged out';
        } catch (\Illuminate\Database\QueryException $ex) {
            $success = false;
            $message = $ex->getMessage();
        }

        // response
        $response = [
            'success' => $success,
            'message' => $message,
        ];
        return response()->json($response);
    }
}
