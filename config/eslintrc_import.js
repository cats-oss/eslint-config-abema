// XXX: To uniform the style of an object literals, we enable `quote-props`
/*eslint quote-props: ['error', 'always'], no-magic-numbers: 0 */

'use strict';

/**
 *  This rule set is assumed on that we use some module bundlers like webpack or rollup.
 *  For the future, we will have to change some points to use ES Modules natively on browsers
 *  or by chaning Node.js ES Module support.
 */

/* eslint sort-keys: 'error' */
const possibleErrors = {
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
    'import/default': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
    'import/named': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
    'import/namespace': 'warn',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
    'import/no-absolute-path': ['error', {
        'commonjs': true,
        // Allow to absolute path for esmodule for on browser.
        'esmodule': false,
    }],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
    'import/no-cycle': ['warn', {
        // If we comment out this, `maxDepth` is `Infinity`.
        //'maxDepth': 1,
    }],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
    // I would not like to restrict like this.
    // If we need to restrict to import under the dire, then we should enable this.
    'import/no-internal-modules': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
    // We allow to import from the parent dir.
    'import/no-relative-parent-imports': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
    'import/no-restricted-paths': ['warn', {
        //'zones': [],
    }],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    'import/no-self-import': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': ['error', {
        'caseSensitive': true,
        'commonjs': true,
    }],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': ['error', {
        'noUselessIndex': false,
    }],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': 'error',
};

const helpfulWarnings = {
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
    'import/export': 'warn',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    'import/no-deprecated': 'warn',

    // TODO: import/no-extraneous-dependencies

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    // Should provide a setter.
    'import/no-mutable-exports': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'warn',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
    // This rule is heplful but we sometimes add a new module which is not imported from anywhere
    // as an experimental new feature.
    // And if there is multiple same named files to hacky-migrate from js to typescript,
    // This sometimes does not works correctly.
    // So we disable this.
    //
    // This feature is useful for refactoring/clean up.
    // Then it might be better to enable this.
    'import/no-unused-modules': 'off',
};

const moduleSystems = {
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
    // We don't think about amd.
    'import/no-amd': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    // These are useful for pure ES Module project.
    'import/no-commonjs': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
    // This is useful for the client code if we enable this.
    'import/no-nodejs-modules': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
    // These are useful for pure ES Module project.
    'import/unambiguous': 'off',
};

const styleguide = {
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
    // If we used webpack, this rule would be useful.
    'import/dynamic-import-chunkname': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
    'import/exports-last': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': ['warn', 'never', {
    }],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    'import/first': ['warn', 'absolute-first'],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md
    'import/group-exports': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
    'import/max-dependencies': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
    // default export is hard to find a usage of symbols.
    'import/no-default-export': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': 'warn',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
    'import/no-named-default': 'off',

    // This is inverse of `no-default-export`.
    'import/no-named-export': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
    'import/no-namespace': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
    'import/no-unassigned-import': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': ['warn', {
        'groups': [
            'builtin',
            'external',
            'parent',
            'sibling',
            'index',
        ],
        // 'newlines-between': 'always',
    }],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    // default export is hard to find a usage of symbols.
    'import/prefer-default-export': 'off',
};
/* eslint-disable sort-keys */

module.exports = {
    'plugins': [
        'import',
    ],

    'settings': {
        'import/resolver': {
            'node': {
                'extensions': ['.js', '.jsx', '.ts', '.tsx'],
            },
        },

        // By default, this option does not include `.jsx` extension.
        'import/extensions': [
            '.js',
            '.jsx',
        ],
    },

    // eslint-plugin-import
    // https://github.com/benmosher/eslint-plugin-import
    'rules': {
        ...possibleErrors,
        ...helpfulWarnings,
        ...moduleSystems,
        ...styleguide,
    },

    'overrides': [
        {
            'files': ['*.mjs'],
            'rules': {
                // See https://nodejs.org/dist/latest-v13.x/docs/api/esm.html
                'import/extensions': ['error', 'always', {
                    'ignorePackages': true,
                }],
            },
        },
    ],
};
