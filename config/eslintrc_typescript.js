// XXX: To uniform the style of an object literals, we enable `quote-props`
/*eslint quote-props: [2, "always"] no-magic-numbers: 0 */

'use strict';

module.exports = {
    'parser': '@typescript-eslint/parser',
    'plugins': [
        '@typescript-eslint',
    ],

    'rules': {
        // TODO: @typescript-eslint/adjacent-overload-signatures

        // TypeScript allows both forms of `[]` and `Array<T>`.
        // But typescript compiler also supports `ReadonlyArray<T>` builtin type and others.
        // So I seem it's nice to sort with `Array<T>` to decrease impedance mismatch.
        '@typescript-eslint/array-type': ['warn', 'generic'],

        // We cannot define this. User project should enable this.
        '@typescript-eslint/ban-types': 'off',

        // `@ts-ignore` violates all static type checkings for _all expressions_ in the next line.
        // It will not be too much warn about it.
        '@typescript-eslint/ban-ts-ignore': 'error',

        // TODO: @typescript-eslint/camelcase

        // A class & interface should be PascalCased
        '@typescript-eslint/class-name-casing': 'error',

        // TODO: @typescript-eslint/explicit-function-return-type

        // It's redundant to enforce to supply `public`.
        '@typescript-eslint/explicit-member-accessibility': 'off',

        // TODO: @typescript-eslint/generic-type-naming
        // TODO: @typescript-eslint/indent
        // TODO: @typescript-eslint/interface-name-prefix

        // Sort with the preferred style (`;`) in TypeScript world.
        '@typescript-eslint/member-delimiter-style': ['warn', {
            'multiline': {
                'delimiter': 'semi',
                'requireLast': true,
            },
            'singleline': {
                'delimiter': 'semi',
                'requireLast': true,
            }
        }],

        // I don't think it's not efffective to sort the order by public/private/protected.
        '@typescript-eslint/member-ordering': ['warn', {
            // * I'd like to aggregate instance fields
            //   to know what we should initialize in the constructor to stabilize the object shape.
            // * It's the time to refactor the object if we'd like to mix the order of static fields & methods.
            'default': [
                'static-field',
                'static-method',
                'instance-field',
                'constructor',
                'instance-method',
            ],
        }],

        // Sort the style in both of ts and tsx.
        '@typescript-eslint/no-angle-bracket-type-assertion': 'error',

        // TODO: @typescript-eslint/no-array-constructor

        // It works as a marker that to implement some interfaces.
        '@typescript-eslint/no-empty-interface': 'off',

        // Please opt-out this rule if you don't have any workarounds.
        '@typescript-eslint/no-explicit-any': 'warn',

        // TODO: @typescript-eslint/no-extraneous-class

        // This is common pitfalls for beginners. We must ban.
        '@typescript-eslint/no-for-in-array': 'error',

        // TODO: @typescript-eslint/no-inferrable-types

        // Ban the misused style aggressively
        '@typescript-eslint/no-misused-new': 'error',

        // TODO: @typescript-eslint/no-namespace

        // Please opt-out this rule if you don't have any workarounds.
        '@typescript-eslint/no-non-null-assertion': 'warn',

        // TODO: @typescript-eslint/no-object-literal-type-assertion
        // TODO: @typescript-eslint/no-parameter-properties

        // Today, we should use ES Module import in general (almost) case.
        '@typescript-eslint/no-require-imports': 'error',

        // Use arrow function basically.
        '@typescript-eslint/no-this-alias': ['warn', {
            'allowDestructuring': false,
            'allowedNames': ['self'],
        }],

        // TODO: @typescript-eslint/no-triple-slash-reference

        // Disabling this does not make sense completely.
        '@typescript-eslint/no-type-alias': 'off',

        // TODO: @typescript-eslint/no-unnecessary-qualifier
        // TODO: @typescript-eslint/no-unnecessary-type-assertion

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

        // This should be sorted with ESLint builtin rule.
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', {
            'functions': false, //  Function declarations are hoisted.
            'classes': true, // Class declarations are not hoisted. We should warn it.
            'variables': true, // for Temporary Dead Zone.
            'typedefs': true, // We rely TypeScript compiler.
        }],

        // We should sort with builtin rule.
        '@typescript-eslint/no-useless-constructor': 'off',

        // Basically, we would not use `require()` and ban its style with @typescript-eslint/no-require-imports.
        // Thus it's emergency case if user disable its rule explicitly and we hasitate to stop it
        // because then user would know what they are doing.
        '@typescript-eslint/no-var-requires': 'off',

        // TODO: @typescript-eslint/prefer-function-type

        // Each style has its own pros & cons.
        '@typescript-eslint/prefer-interface': 'off',

        // This bans legacy syntax.
        '@typescript-eslint/prefer-namespace-keyword': 'error',

        // TODO: @typescript-eslint/promise-function-async
        // TODO: @typescript-eslint/restrict-plus-operands
        // TODO: @typescript-eslint/type-annotation-spacing
    }
};
