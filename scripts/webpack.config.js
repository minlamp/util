const path = require('path')
const NODE_ENV = process.env.NODE_ENV
const IsProduction = NODE_ENV === 'production'

const resolve = dir => {
    return path.resolve(__dirname, '../', dir)
}

const config = {
    entry: {
        app: resolve('./src/index.js')
    },
    output: {
        path: resolve('dist'),
        publicPath: '/',
        filename: 'validateFieldDecorator.js',
        chunkFilename: '[id].js',
        libraryTarget: 'umd',
        library: 'validateFieldDecorator',
    },
    mode: NODE_ENV,
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            }
        ]
    },
    plugins: []
}

module.exports = config
