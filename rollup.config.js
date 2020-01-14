const babel = require('rollup-plugin-babel');
const pkg = require('./package.json')

module.exports = {
    input: 'src/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs'
        },
        {
            file: pkg.module,
            format: 'esm'
        }
    ],
    plugins: [babel({ runtimeHelpers: true })]
}