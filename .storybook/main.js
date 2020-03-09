const baseConfig = require('../.webpack/config');

module.exports = {
    addons: ['@storybook/addon-knobs/register'],
    stories: ['../src/**/*.stories.jsx'],
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Make whatever fine-grained changes you need
        const newConfig = {
            ...config,
            ...baseConfig,
            entry: config.entry,
            output: config.output,
            externals: {},
            plugins: [ ...config.plugins, ...baseConfig.plugins ],
        };

        // Return the altered config
        return newConfig;
    },
};
