const dotenvExpand = require('dotenv-expand');
dotenvExpand(require('dotenv').config({ path: '../../.env'/*, debug: true*/}));

const mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.setPublicPath('../../public').mergeManifest();

mix.ts(__dirname + '/Resources/assets/js/app.tsx', 'js/demo.js').react();
mix.sass("resources/css/index.scss", "public/css/demo.css");

if (mix.inProduction()) {
    mix.version();
}
