@extends('frontend.layouts.app')
@section('content')
{{auth()->user()}}
     <public-master></public-master>
@endsection
	 
 

