// XXX: To uniform the style of an object literals, we enable `quote-props`
/*eslint quote-props: [2, "always"] no-magic-numbers: 0 */

'use strict';

module.exports = {
    'parser': '@typescript-eslint/parser',
    'plugins': [
        '@typescript-eslint',
    ],

    'rules': {
        // This rule conflicts with the pattern of TypeScript like `let a: T;`.
        // If we keep this rule, `let: a: T;` would be error
        // and we need to write `let a: T | null = null;` even if a will not be `null`.
        'init-declarations': 'off',

        // Please opt-out this rule if you don't have any workarounds.
        '@typescript-eslint/no-explicit-any': 'warn',
        // Please opt-out this rule if you don't have any workarounds.
        '@typescript-eslint/no-non-null-assertion': 'warn',

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

        // This bans legacy syntax.
        '@typescript-eslint/prefer-namespace-keyword': 'error',
    }
};
