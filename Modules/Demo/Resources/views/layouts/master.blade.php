<!DOCTYPE html>
<html lang="en">

    <head>
        @include('_head')

        {{-- Laravel Mix - CSS File --}}
       <link rel="stylesheet" href="{{ asset('css/demo.css') }}">
    </head>
    <body>
        @yield('content')

        {{-- Laravel Mix - JS File --}}
        {{-- <script src="{{ mix('js/demo.js') }}"></script> --}}

        <script src="{{ asset('js/demo.js') }}"></script>
        
    @env('local')
        <script src="http://localhost:35729/livereload.js"></script>
    @endenv

    </body>
</html>
