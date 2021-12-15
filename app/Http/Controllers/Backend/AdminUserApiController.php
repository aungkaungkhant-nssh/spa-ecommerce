<?php

namespace App\Http\Controllers\Backend;

use App\Models\Admin;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class AdminUserApiController extends Controller
{
    public function store(Request $request){
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:admins'],
            'phone' => ['required', 'string',  'max:255', 'unique:admins'],
            'password' => ['required', 'string', 'min:8', 'max:16'],
        ]);
        $admin=Admin::create([
            "name"=>$request->name,
            "email"=>$request->email,
            "phone"=>$request->phone,
            "password"=>Hash::make($request->password)
        ]);
        return success("Admin Create Success",$admin);
    }
    public function getAdmin(){
        $admin=Admin::orderBy("id","desc")->get();
        return success("Get Admin",$admin);
    }
    public function editAdmin($id){
       $admin=Admin::find($id);
       return success("Edit Admin",["id"=>$admin->id,"name"=>$admin->name,"email"=>$admin->email,"phone"=>$admin->phone,"password"=>""]);
    }
    public function updateAdmin(Request $request){
       $admin=Admin::find($request->id);
       if($request->password!=""){
        $admin->password=Hash::make($request->password);
       }
       $admin->name=$request->name;
       $admin->email=$request->email;
       $admin->phone=$request->phone;
       $admin->update();
       return success("Update Edit Success",$admin);
    }
    public function destroyAdmin($id){
        if($id){
            $admin=Admin::find($id)->delete();
           return success("Delete Admin Success",$admin);
        }
        
    }
}
