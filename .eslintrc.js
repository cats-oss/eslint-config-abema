// XXX: To uniform the style of an object literals, we enable `quote-props`
/*eslint quote-props: [2, "always"] no-magic-numbers: 0 */
/* eslint-env node */

'use strict';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

/**
 *  Test ourself :)
 */
module.exports = {

    // Load all configs managed in this project
    // to check them by schemes by theirs.
    'extends': [
        './config/eslintrc_core.js',
        './config/eslintrc_import.js',
        './config/eslintrc_node.js',
        './config/eslintrc_react.js',
        './config/eslintrc_react_hooks.js',
        './config/eslintrc_typescript.js',
        './config/eslintrc_typescript_react.js',
    ],

    // This option is only applied to this project
    // (This will not be applied for an user project).
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'script',
        'project': path.resolve(__dirname, './tsconfig.json'),
    },

    'plugins': [
        'markdown',
    ],

    'env': {
        'commonjs': true,
    },

    'root': true,
};
