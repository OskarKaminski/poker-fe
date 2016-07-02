module.exports = function (wallaby) {
    return {
        files: [
            {pattern: 'node_modules/redux/dist/redux.min.js', instrument: false},
            {pattern: 'config/deep-freeze.js', instrument: false},
            'src/*.js', '!src/*.spec.js'
        ],

        tests: [
            'src/*.spec.js'
        ],

        compilers: {
            '**/*.js': wallaby.compilers.babel({
                presets: ['es2015', 'stage-2'],
                plugins: ['transform-object-assign']
            })
        }
    };
};