var wallabyWebpack = require('wallaby-webpack');
var wallabyPostprocessor = wallabyWebpack({
    module: {
        rules: [{
            test: /\.json$/,
            use: [{loader: 'json-loader'}],
        }]
    }
});

module.exports = function (wallaby) {
    return {
        files: [
            {pattern: 'config/deep-freeze.js', instrument: false},
            {pattern: 'src/state/**/*.reducer.js', load: false},
            {pattern: 'src/domain-logic/**/*.js', load: false},
            {pattern: 'src/**/*.spec.js', ignore: true},
            {pattern: 'src/**/*.json', load: false}
        ],

        tests: [
            {pattern: 'src/**/*.spec.js', load: false}
        ],

        compilers: {
            '**/*.js': wallaby.compilers.babel({
                presets: ['es2015', 'stage-2']
            })
        },

        postprocessor: wallabyPostprocessor,
        setup: function () {
            // required to trigger test loading
            window.__moduleBundler.loadTests();
        }
    };
};