const { override, addWebpackAlias } = require('customize-cra');
const addLessLoader = require('customize-cra-less-loader')
const path = require('path');

module.exports = override(
    addLessLoader({
        lessLoaderOptions: {
            lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                    "@primary-color": "#2b4acb", // primary color for all components
                }
            }
        }
    }),
    addWebpackAlias({
        '@':path.resolve(__dirname, 'src')
    })
)