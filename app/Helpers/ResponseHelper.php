<?php

function success($message,$data){
    return response()->json([
        "status"=>"success",
        "message"=>$message,
        "data"=>$data
    ]);
}
function fail($data,$statuscode=null){
    return response()->json([
        "status"=>$statuscode,
        "errors"=>$data
    ],$statuscode);
}