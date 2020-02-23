const config = require('./config.js');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

config.plugins = [
    ...config.plugins,
    new BundleAnalyzerPlugin(),
];

module.exports = config;