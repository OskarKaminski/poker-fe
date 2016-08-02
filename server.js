var bs = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback');

bs.init({
    server: {
        baseDir: './',
        middleware: [ historyApiFallback() ]
    }
});

bs.watch(['*', 'dist/index.js']).on('change', bs.reload);