<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

@include('_head')

<body class="antialiased">
    <div id="app"></div>
    <script src="{{ asset('js/app.js') }}"></script>
    @env('local')
    <script src="http://localhost:35729/livereload.js"></script>
    @endenv
</body>

</html>