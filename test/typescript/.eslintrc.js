// XXX: To uniform the style of an object literals, we enable `quote-props`
/* eslint quote-props: ['error', "always"] no-magic-numbers: 'off' */
/* eslint-env node */

// eslint-disable-next-line strict
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
        '../../config/eslintrc_typescript.js',
        '../../config/eslintrc_typescript_react.js',
    ],

    // This option is only applied to this project
    // (This will not be applied for an user project).
    'parserOptions': {
        'sourceType': 'module',
        'project': path.resolve(__dirname, '../../tsconfig.json'),
    },
};
