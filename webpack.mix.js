const dotenvExpand = require("dotenv-expand");
dotenvExpand(
    require("dotenv").config({ path: "../../.env" /*, debug: true*/ })
);

const fs = require("fs");

const mix = require("laravel-mix");
require("laravel-mix-merge-manifest");

const LiveReloadPlugin = require("webpack-livereload-plugin");

const fileExists = (file) => {
    try {
        fs.accessSync(file, fs.constants.R_OK | fs.constants.W_OK);
        return true;
    } catch (err) {
        return false;
    }
};

mix.mergeManifest();

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

// mix.ts("resources/js/app.tsx", "public/js").react();

// Sharing sass for now...
mix.sass("resources/css/index.scss", "public/css/index.css");

// All modules!
const modules = require("./modules_statuses.json");

// Compiles all modules js
Object.keys(modules).map((m) => {
    if (modules[m]) {
        let jsFile = `Modules/${m}/Resources/assets/js/app.tsx`;
        let sassFile = `Modules/${m}/Resources/assets/sass/app.scss`;

        if (fileExists(__dirname + "/" + jsFile)) {
            mix.ts(jsFile, `/js/${m.toLocaleLowerCase()}.js`).react();
        }

        if(fileExists(__dirname + "/" + sassFile)){
            mix.sass(sassFile, `/css/${m.toLocaleLowerCase()}.css`);

        }
    }

    return { [m]: modules[m] };
});

mix.webpackConfig({
    plugins: [new LiveReloadPlugin()],
});

mix.disableSuccessNotifications();

if (mix.inProduction()) {
    mix.version();
}
