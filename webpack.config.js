const path = require('path');
const fs = require('fs');

const entryDir = path.resolve(__dirname, 'src/scripts');

const entries = [];
fs.readdirSync(entryDir)
    .map(item => `${entryDir}/${item}`)
    .forEach(item => entries.push(item));

module.exports = {
    mode: 'production',
    entry: {
        main: {
            import: entries,
            dependOn: 'data',
        }, data: {
            import: './src/data/[1]indice.js'
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist/scripts'),
        filename: '[name].bundle.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 9000,
        liveReload: true,
    }
}
