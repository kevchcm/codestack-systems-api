<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>CodeStack API</title>

        <!-- Fonts -->
        {{--<link rel="preconnect" href="https://fonts.bunny.net">--}}
        {{--<link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />--}}
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Raleway&family=Ubuntu+Condensed&display=swap" rel="stylesheet">
    
        @vite('resources/css/app.css')
        @vite('resources/js/app.js')
    </head>
    <body class="antialiased">
        <main class="w-screen h-screen bg-gray">
            <x-header />
            
            <x-table />
        </main>
    </body>
</html>
