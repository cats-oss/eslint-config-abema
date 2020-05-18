// XXX: To uniform the style of an object literals, we enable `quote-props`
/* eslint quote-props: ['error', "always"] no-magic-numbers: 'off' */

'use strict';

module.exports = {

    'plugins': [
        'node',
    ],

    // eslint-plugin-node
    // https://github.com/mysticatea/eslint-plugin-node
    /* eslint sort-keys: 'error' */
    'rules': {
        'node/callback-return': 'off',
        'node/exports-style': ['warn', 'module.exports'],

        // See also eslint-plugin-import
        // TODO: 'node/file-extension-in-import':

        'node/global-require': 'error',
        'node/handle-callback-err': 'off',
        'node/no-callback-literal': 'off',
        'node/no-deprecated-api': 2, // we'd like to detect the case of using deprecated apis.
        'node/no-exports-assign': 'error', // This simply checks human error.
        'node/no-extraneous-import': 2, // Specify more details in your project.
        'node/no-extraneous-require': 2, // Specify more details in your project.
        'node/no-missing-import': 2,
        'node/no-missing-require': 2,
        'node/no-mixed-requires': ['error', {
            'grouping': true,
        }],
        'node/no-new-require': 'error',
        'node/no-path-concat': 'error',
        'node/no-process-env': 'off',
        'node/no-process-exit': 'off',
        'node/no-restricted-import': 'off',
        'node/no-restricted-require': 'off',
        'node/no-sync': 'warn',

        'node/no-unpublished-bin': 0, // You should enable this rules if you develop a npm package.
        'node/no-unpublished-import': 2, // Specify more details in your project.
        'node/no-unpublished-require': 2, // Specify more details in your project.

        // Covered by core's `no-restricted-syntax`
        'node/no-unsupported-features/es-builtins': 0,
        // TODO: 'node/no-unsupported-features/es-syntax': 0,
        // TODO: 'node/no-unsupported-features/node-builtins': 0,

        // TODO: 'node/prefer-global/buffer'
        // TODO: 'node/prefer-global/console'
        // TODO: 'node/prefer-global/process'
        // TODO: 'node/prefer-global/text-decoder'
        // TODO: 'node/prefer-global/text-encoder'
        // TODO: 'node/prefer-global/url-search-params'
        // TODO: 'node/prefer-global/url'
        // TODO: 'node/prefer-promises/dns'
        // TODO: 'node/prefer-promises/fs'

        'node/process-exit-as-throw': 2, // sort with `consistent-return` rules.
        'node/shebang': 2,
    },
};
