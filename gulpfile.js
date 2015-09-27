var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix .sass('app.scss')
        .copy('node_modules/bootstrap/dist/js/bootstrap.min.js', 'public/js/bootstrap.min.js')
        .copy('node_modules/bootstrap/dist/fonts', 'public/fonts')
        .copy('node_modules/jquery/dist', 'public/js')
        .copy('node_modules/font-awesome/css', 'public/css')
        .copy('node_modules/font-awesome/fonts', 'public/fonts')
        .version('css/app.css');
});
