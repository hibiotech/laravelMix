<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @include('_head')
</head>

<body class="antialiased">
    <div id="admin"></div>
    <script src="{{ asset('js/admin.js') }}"></script>
    @env('local')
    <script src="http://localhost:35729/livereload.js"></script>
    @endenv
</body>

</html>