// XXX: To uniform the style of an object literals, we enable `quote-props`
/*eslint quote-props: [2, "always"] no-magic-numbers: 0 */

'use strict';

module.exports = {
    'parser': '@typescript-eslint/parser',
    'plugins': [
        '@typescript-eslint',
    ],

    'rules': {
        // the default `no-unused-vars` is not support type annotations.
        'no-unused-vars': 'off',
        // Sort values with `no-unused-vars` provided by core.
        '@typescript-eslint/no-unused-vars': ['warn', {
            'vars': 'all',
            'args': 'after-used',
            'argsIgnorePattern': '^_', // Sort with TypeScript compiler's builtin linter.
            'caughtErrors': 'all',
            'caughtErrorsIgnorePattern': '^_', // Allow `catch (_e) {...}`
        }],
    }
};
