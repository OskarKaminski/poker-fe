var wallabyWebpack = require('wallaby-webpack');
var wallabyPostprocessor = wallabyWebpack({
    module: {
        loaders: [{ test: /\.json$/, loader: 'json' }]
    }
});

module.exports = function (wallaby) {
    return {
        files: [
            {pattern: 'node_modules/redux/dist/redux.min.js', instrument: false},
            {pattern: 'node_modules/angular/angular.min.js', instrument: false},
            {pattern: 'config/deep-freeze.js', instrument: false},
            {pattern: 'src/**/*.js', load: false},
            {pattern: 'src/**/*.json', load: false},
            {pattern: 'src/**/*.spec.js', ignore: true}
        ],

        tests: [
            {pattern: 'src/**/*.spec.js', load: false}
        ],

        compilers: {
            '**/*.js': wallaby.compilers.babel({
                presets: ['es2015', 'stage-2', 'react'],
                plugins: ['transform-object-assign']
            })
        },

        postprocessor: wallabyPostprocessor,
        setup: function () {
            // required to trigger test loading
            window.__moduleBundler.loadTests();
        }
    };
};