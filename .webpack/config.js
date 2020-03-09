const path = require('path');

const BASE_DIR = path.normalize(`${__dirname}/../`);
const SRC_DIR = path.normalize(`${__dirname}/../src`);

const BUILD_DIR = path.normalize(`${__dirname}/../dist`);

const JsxLoader = {
    loader: 'babel-loader',
    options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
    },
}
const SvgLoader = {
    loader: 'react-svg-loader',
    options: {
        jsx: true,
    }
}
const StyleLoader = {
    loader: 'style-loader'
};
const ScssLoader = {
    loader: 'sass-loader',
    options: {
        sourceMap: true,
    }
};
const ResolveUrlLoader = {
    loader: 'resolve-url-loader'
};
const CssModuleLoader = {
    loader: 'css-loader',
    options: {
        modules: {
            localIdentName: '[local]__[hash:base64:5]',
        },
        sourceMap: true,
    }
};

const config = {
    entry: {
        'index.js': `${SRC_DIR}/index.js`,
    },
    output: {
        path: BUILD_DIR,
        filename: 'index.js',
    },
    externals: {
      react: 'react',
      "react-dom": 'react-dom'
    },
    resolve: {
      modules: [SRC_DIR, 'node_modules'],
      extensions: ['.js', '.jsx', '.css', '.scss', '.svg'],
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [JsxLoader],
            },
            {
                test: /\.jsx$/,
                include: /src/,
                exclude: /node_modules/,
                use: [JsxLoader],
            },
            {
                test: /\.module\.scss$/,
                use: [
                    StyleLoader,
                    CssModuleLoader,
                    ResolveUrlLoader,
                    ScssLoader,
                ],
            },
            {
                test: /.svg$/,
                use: [JsxLoader, SvgLoader,],
            },
        ],
    },
};

module.exports = config;

