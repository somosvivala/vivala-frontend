let mix = require('laravel-mix');

mix.sass('./src/assets/sass/_all.scss', 'css/app.css')
    .setPublicPath('public');
