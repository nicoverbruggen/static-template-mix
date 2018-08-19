let mix = require('laravel-mix');

mix
.js('src/js/app.js', 'dist/')
.sass('src/scss/app.scss', 'dist/');

mix.browserSync({
    // Also watch our HTML file.
    files: ['index.html'],
    // We'll serve the current directory.
    server: "./",
    // Don't proxy (the default).
    proxy: null
});