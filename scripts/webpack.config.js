const path = require('path')
const NODE_ENV = process.env.NODE_ENV
const IsProduction = NODE_ENV === 'production'
const fs = require('fs')

const resolve = dir => {
    return path.resolve(__dirname, '../', dir)
}

let ver = 'latest'
try {
    const packageJson = fs.readFileSync(resolve('./package.json'))
    const { version } = JSON.parse(packageJson)
    ver = version
}catch(err) {
    console.warn(err.toString())
}

const config = {
    entry: {
        app: resolve('./src/index.js')
    },
    output: {
        path: resolve('dist'),
        publicPath: '/',
        filename: IsProduction ? `easy-util.${ver}.min.js` : `easy-util.${ver}.js`,
        libraryTarget: 'umd',
        library: 'easyUtil',
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
