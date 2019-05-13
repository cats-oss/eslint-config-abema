// XXX: To uniform the style of an object literals, we enable `quote-props`
/*eslint quote-props: [2, "always"] no-magic-numbers: 0 */

'use strict';

module.exports = {
    'parser': '@typescript-eslint/parser',
    'plugins': [
        '@typescript-eslint',
    ],

    'rules': {
        // Basically, it's nice to uniform the order of overload signatures.
        '@typescript-eslint/adjacent-overload-signatures': 'warn',

        // TypeScript allows both forms of `[]` and `Array<T>`.
        // But typescript compiler also supports `ReadonlyArray<T>` builtin type and others.
        // So I seem it's nice to sort with `Array<T>` to decrease impedance mismatch.
        '@typescript-eslint/array-type': ['warn', 'generic'],

        // If you don't have use `await`, then it should be removed to reduce internal works.
        '@typescript-eslint/await-thenable': 'warn',

        // We cannot define this. User project should enable this.
        '@typescript-eslint/ban-types': 'off',

        // `@ts-ignore` violates all static type checkings for _all expressions_ in the next line.
        // It will not be too much warn about it.
        '@typescript-eslint/ban-ts-ignore': 'error',

        // This should be sorted with ESLint builtin rule.
        'camelcase': 'off',
        '@typescript-eslint/camelcase': ['error', {
            'properties': 'always',
            'ignoreDestructuring': false,
        }],

        // A class & interface should be PascalCased
        '@typescript-eslint/class-name-casing': 'error',

        // TODO: (#64) @typescript-eslint/explicit-function-return-type

        // It's redundant to enforce to supply `public`.
        '@typescript-eslint/explicit-member-accessibility': ['warn', {
            'accessibility': 'no-public',
            'overrides': {
                // Fro parameter properties, all items should be explicited.
                'parameterProperties': 'explicit',
            },
        }],

        // If we enable this, this setting only allow either `T` form or `TKey` form.
        // In our internal codebase, however, enabling this rule increases the time to lint.
        // We recommend to disable this rule if you'd like to decrease the time to lint.
        '@typescript-eslint/generic-type-naming': ['error', '(^[A-Z]\\d?$|^T[A-Z][a-zA-Z]+\\d?$)'],

        // TODO: @typescript-eslint/indent

        // [By TypeScript coding guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines),
        // This rule is banned.
        //
        // > Do not use "I" as a prefix for interface names.
        //
        // We follow this.
        '@typescript-eslint/interface-name-prefix': ['error', 'never'],

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

        // By these reasons, I think we recommend to add `_` prefix to private fields.
        //
        //  * Historically, JavaScript wolrd use `_` prefix to mark fields as _private_.
        //  * Until coming [private fields of class field declarations proposal](https://github.com/tc39/proposal-class-fields),
        //    there is no true private fields in JavaScript.
        //      * If TypeScript compiler supports it, it might be better to relax this rule.
        //  * TypeScript will be transformed into plain JavaScript and plain JavaScript does not any informations
        //    to express whether a field is private or not.
        '@typescript-eslint/member-naming': ['warn', {
            'private': '^_',
            'protected': '^_',
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

        // This should be sorted with ESLint builtin rule.
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',

        // It works as a marker that to implement some interfaces.
        '@typescript-eslint/no-empty-interface': 'off',

        // Please opt-out this rule if you don't have any workarounds.
        '@typescript-eslint/no-explicit-any': 'warn',

        '@typescript-eslint/no-extraneous-class': ['warn', {
            'allowConstructorOnly': true,
            'allowEmpty': true,
            // If there is the class which only have static members,
            // then we have a chance to refactoring them to simple module level variables.
            'allowStaticOnly': false,
        }],

        // This is common pitfalls for beginners. We must ban.
        '@typescript-eslint/no-for-in-array': 'error',

        // Type inference is useful feature for Gradual Typing and other static typing system.
        // However, over omission would increases compile (type checking) time and
        // lacks the aspect of type annotation benefits as _documentation_.
        '@typescript-eslint/no-inferrable-types': 'off',

        // Ban the misused style aggressively
        '@typescript-eslint/no-misused-new': 'error',

        // Only allow declarations. Use ES Module in almost projects.
        '@typescript-eslint/no-namespace': ['error', {
            'allowDeclarations': true,
            'allowDefinitionFiles': true,
        }],

        // Please opt-out this rule if you don't have any workarounds.
        '@typescript-eslint/no-non-null-assertion': 'warn',

        // Uniform the style.
        '@typescript-eslint/no-object-literal-type-assertion': 'warn',

        // This TypeScript syntax is useful to reduce declarations of class properties.
        // However, we feel this syntax has these negative points:
        //
        //  * This is not a part of ECMA262 standards.
        //  * This makes the ordering of initializing members unclear.
        //
        // By these things, we enable this rule as defensive choice.
        '@typescript-eslint/no-parameter-properties': 'error',

        // Today, we should use ES Module import in general (almost) case.
        '@typescript-eslint/no-require-imports': 'error',

        // Use arrow function basically.
        '@typescript-eslint/no-this-alias': ['warn', {
            'allowDestructuring': false,
            'allowedNames': ['self'],
        }],

        // Basically, use ES Module import. // <reference path="" /> is just special case.
        '@typescript-eslint/no-triple-slash-reference': 'error',

        // Disabling this does not make sense completely.
        '@typescript-eslint/no-type-alias': 'off',

        // Try to detect redundant case,
        '@typescript-eslint/no-unnecessary-qualifier': 'warn',

        // We allow this this kind of redundant code because it sometimes prevents a mistake.
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',

        // This should be sorted with ESLint builtin rule.
        //
        // If your project only has TypeScript or you run ESLint for TypeScript separately from for JavaScript,
        // and if you use typescript compiler with `noUnused***` options,
        // then you can disable this.
        'no-unused-vars': 'off',
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

        // I seem almost user would use simple function type.
        // A person who uses an interface to express callbable signature is
        // know what they are doing.
        '@typescript-eslint/prefer-function-type': 'error',

        // Today, in almost case, we don't have to write `for` loop because native implementations which supports
        // iterator protocols or you might use some down-level transformers. So I think we should enable this rule.
        //
        // If your application cannot use any down-level transformers or if you face to some perf issue,
        // let's disable this.
        // If you would like to ban `for-of` loop by that the transformed code is large,
        // then it might be more better to ban `for-of` syntax.
        //
        // TODO(#97):
        // However, by the implementation of this rule v1.7,
        // this mis-reports the error even if the collection in for loop does not have Symbol.iterator().
        '@typescript-eslint/prefer-for-of': 'off',

        // Today, in almost case, we would develop our application with ES2016~ polyfills
        // and it's rare case to develop an app without ~ES2016 polyfills.
        // So I think we should enable this rule.
        // If your application cannot load any polyfills or have any perf issues,
        // let's disable this.
        // By the implementation of this rule in v1.7, this rule detects if the object fulfills:
        //
        //  * Has `indexOf()` property.
        //  * Has `includes()` property.
        //  * They has same signatures.
        '@typescript-eslint/prefer-includes': 'warn',

        // Each style has its own pros & cons.
        '@typescript-eslint/prefer-interface': 'off',

        // This bans legacy syntax.
        '@typescript-eslint/prefer-namespace-keyword': 'error',

        // * We enable this rule to sorting the style in your project.
        // * I'm not sure about that this rule document says as the reason that `RegExp.prototype.exec()` is faster than
        //  `String.prototype.match()`. We need to invetigate it as future work. See #117.
        // * This rule might not cover the case that fulfills these conditions:
        //      1.  `somestring.match(regexp)` and this `regexp` is a simple arguments which is annotated with `RegExp`
        //          of function _A_.
        //      2.  function _A_ would be take both of a regular expression with `g` flag and one without `g` flag.
        //   But I think that such case has some potential bugs
        //   because `String.prototype.match()` works in a different wary by supplying `g` flag.
        // We should elminate such code.
        '@typescript-eslint/prefer-regexp-exec': 'warn',

        // Today, in almost case, we would develop our application with ES2015~ polyfills
        // and it's rare case to develop an app without ~ES2015 polyfills.
        // So I think we should enable this rule.
        // If your application cannot load any polyfills or have any perf issues,
        // let's disable this.
        '@typescript-eslint/prefer-string-starts-ends-with': 'warn',

        // Of course, It looks nice for styling to sort them
        // to async function that all functions returning `Promise`.
        // However, we hesitate to say some policy about it by these reasons
        // and we stay disable this rule.
        //
        //  1. We don't have much data about the performance impact of
        //     "async function vs returning `Promise`".
        //  2. In almost case, it bloats the result code size by down-level transform for async function.
        //     even if it simply return the value wrapped in `Promise` and without any `await` clause.
        //     if is not always nice to use `async function()`.
        //  3. We can annotate the type of returned value and we also checking types statically,
        //     thus we don't have strong motivation to use `async function ()` syntax as signature.
        //
        // For the future, we might be enable this. But this moment is not so.
        '@typescript-eslint/promise-function-async': 'off',

        // This detects a common mistake which uses `+` for diffrent types.
        '@typescript-eslint/restrict-plus-operands': 'warn',

        // TODO: @typescript-eslint/type-annotation-spacing

        // In some case, function definition by overloading improves IntelliSense ergonomics.
        '@typescript-eslint/unified-signature': 'off',
    }
};
