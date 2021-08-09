const mix = require("laravel-mix");
const LiveReloadPlugin = require("webpack-livereload-plugin");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts("resources/js/app.tsx", "public/js").react();

mix.ts("resources/js/home.tsx", "public/js").react();

mix.ts("resources/js/admin.tsx", "public/js").react();

// Sharing sass for now...
mix.sass('resources/css/index.scss', 'public/css/index.css');



mix.webpackConfig({
    plugins: [new LiveReloadPlugin()]
});


mix.disableSuccessNotifications();
