// XXX: To uniform the style of an object literals, we enable `quote-props`
/*eslint quote-props: [2, "always"] no-magic-numbers: 0 */

'use strict';

module.exports = {
    'extends': [
        './eslintrc_react.js',
    ],

    'rules': {
        // This rule should be support `.tsx` because TypeScript only allow jsx syntax in `.tsx` file.
        'react/jsx-filename-extension': ['error', {
            'extensions': ['.jsx', '.tsx'],
        }],
    }
};
