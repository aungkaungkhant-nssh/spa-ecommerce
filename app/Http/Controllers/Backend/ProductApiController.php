<?php

namespace App\Http\Controllers\Backend;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use PhpParser\Node\Stmt\Global_;

class ProductApiController extends Controller
{
    public function index(){
        $products=Product::with(["category","brand"])->get();
        return success("Get Products",$products);
    }
    public function store(Request $req){
        $req->validate(
            [
            "category_id"=>"required|integer",
            "brand_id"=>"required|integer",
            "name"=>"required|string",
            "price"=>"required|integer",
            "description"=>"required",
            "pics"=>"required|array"
            ],
            [
                "category_id.required"=>"Category field is required",
                "brand_id.required"=>"Brand field is required",
                "pics.required"=>"The image field is required"
            ]
        );
        $imageFile=[];
        if(count($req->pics)>=0){
            foreach($req->pics as $file){
                $extension=$file->getClientOriginalExtension();
                if($extension=="jpg" || $extension=="jpeg" || $extension=="png"){
                    $fileNameWithExt= $file->getClientOriginalName();
                    $fileName=pathinfo($fileNameWithExt,PATHINFO_FILENAME);
                    $fileNameToStore=$fileName."_".time().".".$extension;
                    array_push($imageFile,$fileNameToStore);
                    $file->storeAs("public/images",$fileNameToStore);
                }
             }
        } 
        Product::create([
            "category_id"=>$req->category_id,
            "brand_id"=>$req->brand_id,
            "name"=>$req->name,
            "price"=>$req->price,
            "image"=>$imageFile,
            "description"=>$req->description,
            "size"=>$req->size ? explode(",",$req->size) : [],
            "color"=>$req->color ? explode(",",$req->color) :[]
        ]);
    }
    public function show($id){
       $product=Product::with(["category","brand"])->find($id);
       return success("Detail Product",$product);
    }
    public function edit($id){
        $product=Product::with(["category","brand"])->find($id);
        return success("Edit product",$product);
    }
    public function update(Request $request,$id){
         $request->validate(
            [
            "category_id"=>"required|integer",
            "brand_id"=>"required|integer",
            "name"=>"required|string",
            "price"=>"required|integer",
            "description"=>"required",
            "original_image"=>"required_without:pics",
            "pics"=>"required_without:original_image"
            ],
            [
                "category_id.required"=>"Category field is required",
                "brand_id.required"=>"Brand field is required",
                "pics.required_without"=>"The image field is required",
                "original_image.required_without"=>"The image field is required"
            ]
        );
        $product=Product::find($id);
        $imageFile=[];
        if($request->pics){
            foreach($request->pics as $file){
                $extension=$file->getClientOriginalExtension();
                if($extension=="jpg" || $extension=="jpeg" || $extension=="png"){
                    $fileNameWithExt= $file->getClientOriginalName();
                    $fileName=pathinfo($fileNameWithExt,PATHINFO_FILENAME);
                    $fileNameToStore=$fileName."_".time().".".$extension;
                    array_push($imageFile,$fileNameToStore);
                    $file->storeAs("public/images",$fileNameToStore);
                }
             }
             
        }
        if(!$request->original_image){
            foreach($product->image as $img){
                Storage::delete('public/images/'.$img);
             }
        }else{
          $deleteImage=  array_diff($product->image,$request->original_image);
            foreach($deleteImage as $i){
                Storage::delete('public/images/'.$i);
            }
        }
        $product->category_id=$request->category_id;
        $product->brand_id=$request->brand_id;
        $product->name=$request->name;
        $product->price=$request->price;
        $product->description=$request->description;
        $product->image=count($imageFile)>0 ?   array_merge($imageFile,$request->original_image?$request->original_image:[]) : $request->original_image;
        $product->size=$request->size ? explode(",",$request->size) : [];
        $product->color=$request->color ? explode(",",$request->color) :[];
        $product->update();
        return success("Update product success",$product);
    }
    public function destroy($id){
        if($id){
            $product=Product::find($id);
            foreach($product->image as $img){
                Storage::delete('public/images/'.$img);
             }
            $product->delete();
           return success("Product Delete Success",$product);
        }
    }
}
