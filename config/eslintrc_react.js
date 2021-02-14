// XXX: To uniform the style of an object literals, we enable `quote-props`
/* eslint quote-props: ['error', "always"] no-magic-numbers: 'off' */

'use strict';

module.exports = {

    'plugins': [
        'react'
    ],

    'settings': {
        'react': {
            'version': 'detect', // used for 'no-deprecated' rule.
        }
    },

    // ESLint-plugin-React
    // https://github.com/yannickcr/eslint-plugin-react
    'rules': {
        'react/boolean-prop-naming': 0, // We don't want to give special weight to `boolean`.
        'react/button-has-type': 1,
        'react/default-props-match-prop-types': 1,
        'react/display-name': 0, // Auto covered by jsx transformer.
        'react/forbid-component-props': 1,
        'react/forbid-dom-props': [1, {
            'forbid': ['id'],
        }],
        'react/forbid-elements': [1, {
            'forbid': [],
        }],
        'react/forbid-foreign-prop-types': [2, {
            'allowInPropTypes': false, // We doubt this option is really useful.
        }],
        'react/forbid-prop-types': 0,

        // TODO(#298): This rule should be sort with project style.
        'react/function-component-definition': 0,

        'react/no-access-state-in-setstate': 1,
        // The index of `Array<T>` is not suitable for `key` props.
        // But this restriction does not prevent that the id for each items is just a sequence number of some list
        // even if a item has an "unique" id. This rule cannot prevent it. meaningless.
        'react/no-array-index-key': 0,
        'react/no-adjacent-inline-elements': 0,
        'react/no-children-prop': 2, // children should be nested between the opening and closing tags.
        'react/no-danger': 2,
        'react/no-danger-with-children': 2,
        'react/no-deprecated': 2, // Detect deprected styles

        // By [the note by sebmarkbage](https://gist.github.com/sebmarkbage/75f0838967cd003cd7f9ab938eb1958f), "The Rules of React",
        // React does not forbid to call `.setState()` in lifecycle methods `componentDidMount()` and `componentDidUpdate()`.
        // But I think we should warn to not call `.setState()` in them because:
        //
        //  * It's easy to cause an inifinite recursive calling `.setState()` in `componentDidUpdate()` if you don't use it carefully.
        //      * React's development mode can detect the case to call `.setState()` infinite recursively.
        //        But it's just a runtime check, not the check statically.
        //  * Calling `.setState()` in `componentDidMount()` causes re-render. It's might be a costly operation.
        //
        //  This warning is just "weak" warning for you before you write such a code.
        //  I allow completely to "opt-out" this rule by an inline comment switch if you understand risks.
        'react/no-did-mount-set-state': [1, 'disallow-in-func'],
        'react/no-did-update-set-state': [1, 'disallow-in-func'],

        'react/no-direct-mutation-state': 2,
        'react/no-find-dom-node': 2, // Disallow to use `ReactDOM.findDOMNode()`.
        'react/no-is-mounted': 2,
        'react/no-multi-comp': 0, // Enable to define a multiple component to a single file.
        'react/no-render-return-value': 2,
        'react/no-redundant-should-component-update': 1,
        'react/no-set-state': 0,
        'react/no-string-refs': [2, {
            'noTemplateLiterals': true,
        }],
        'react/no-this-in-sfc': 1,
        'react/no-typos': 0,
        'react/no-unescaped-entities': 2,
        'react/no-unknown-property': 2,
        'react/no-unsafe': 2, // We should ban an unsafe operation.
        'react/no-unused-prop-types': [0, { // XXX: Disable to avoid mis-detection
            'customValidators': [],
            'skipShapeProps': false,
        }],
        'react/no-unused-state': 1,
        // We don't think this code is produced in a  common case. If you need it, let's opt out/
        'react/no-will-update-set-state': 2,
        'react/prefer-es6-class': 2,
        // At v7.13, this only supports Flowtype.
        'react/prefer-read-only-props': 'off',
        'react/prefer-stateless-function': [1, {
            'ignorePureComponents': true,
        }],
        'react/prop-types': [1, {
            'skipUndeclared': false,
        }],
        'react/react-in-jsx-scope': 1,
        'react/require-default-props': 0, // This does not resolve the essence of problem.
        'react/require-optimization': [0, {
            'allowDecorators': []
        }],
        'react/require-render-return': 2,
        'react/self-closing-comp': [2, {
            'component': true,
            'html': false,
        }],
        // A _state_ usually depends on some value hold by its instance.
        // So it's more reasonable way to init in the constructor.
        'react/state-in-constructor': ['error', 'always'],
        // I seem this might be a problematic only for class component,
        // But we lives in the era of hooks and almost properties which is targeted by this rule
        // are classic (non-recommended in today) ones.
        'react/static-property-placement': 'off',
        'react/void-dom-elements-no-children': 1,

        // We define customized rules because we thought default settings mixes with
        // component's arguments and lifecycle methods.
        'react/sort-comp': [1, {
            'order': [
                'constructor',
                'metadata',
                'rendering',
                'lifecycle',
                'everything-else'
            ],
            'groups': {
                'metadata': [
                    'displayName',
                    'propTypes',
                    'contextTypes',
                    'childContextTypes',
                    'mixins',
                    'getDefaultProps',
                    'getInitialState',
                    'getChildContext'
                ],
                'rendering': [
                    'type-annotations',
                    'render',
                    '/^render.+$/'
                ]
            }
        }],
        'react/sort-prop-types': [0, { // we cannot force alphabetical order to our old codebase.
            'callbacksLast': true,
            'requiredFirst': true,
        }],
        'react/style-prop-object': 2,

        // JSX-specific rules
        'react/jsx-boolean-value': [2, 'always'], // Enforce to specify html's boolean type attribute.
        'react/jsx-child-element-spacing': 0,
        'react/jsx-closing-bracket-location': 0, // It doesn’t matter.
        'react/jsx-closing-tag-location': 1,
        // This is a formatter problem.
        'react/jsx-curly-newline': 'off',
        'react/jsx-curly-spacing': [1, { 'children': true }],
        'react/jsx-equals-spacing': [1, 'never'],
        'react/jsx-filename-extension': [2, {
            'extensions': ['.jsx']
        }],
        'react/jsx-first-prop-new-line': 0, // This is just stylistic issue.
        'react/jsx-fragments': 'off', // I don't think enforce the style for this.
        'react/jsx-handler-names': [2, {
            'eventHandlerPrefix': 'on', // There is no event handler which is diffrent from this rules (`onBarFoo`).
            'eventHandlerPropPrefix': 'on',
            'checkLocalVariables': false,
        }],
        // Sort with core's `indent` rule.
        'react/jsx-indent': [1, 4, {
            'checkAttributes': false,
            'indentLogicalExpressions': false,
        }],
        'react/jsx-indent-props': 0, // we cannot force alphabetical order to our old codebase, and this is not any serious problem.
        'react/jsx-key': [1, {
            'checkFragmentShorthand': true,
            'checkKeyMustBeforeSpread': false,
        }],
        'react/jsx-newline': 0, // this should be covered by formatter.
        'react/jsx-max-depth': 0, // We should not restrict this by default.
        'react/jsx-max-props-per-line': 0, // we don't think this is serious problem.
        'react/jsx-no-bind': [2, { // Sort to bind with this in constructor.
            'ignoreDOMComponents': true,
            'ignoreRefs': true, // we may use `refs`.
            'allowArrowFunctions': true,
            'allowBind': false,
        }],
        'react/jsx-no-comment-textnodes': 2,
        'react/jsx-no-constructed-context-values': 'warn',
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-literals': 1,
        'react/jsx-no-script-url': 2,
        'react/jsx-no-target-blank': [1, { // see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
            'enforceDynamicLinks': 'always',
            // For legacy browsers which does not support `rel=noopener`, this option is useful.
            // But almost modern browser support it. We don't have to turn off this option
            // if we don't care about legacy browsers (IE11 & legacy Edge!).
            // If you need to support legacy IE11 & legacy Edge, turn off this option.
            // See also
            //  * https://caniuse.com/#feat=rel-noopener
            //  * https://mathiasbynens.github.io/rel-noopener
            //  * https://html.spec.whatwg.org/multipage/links.html#link-type-noreferrer
            'allowReferrer': true,
            'warnOnSpreadAttributes': true,
        }],
        'react/jsx-no-undef': 2,
        // This rule is conservative choice for plain JS world.
        'react/jsx-curly-brace-presence': ['warn', {
            // In JSX syntax, `props` is not a string in many cases.
            // And in plain JavaScript worlds, we don't have any static type checks,
            // we need think about whether we should add a bracket or not by the type of props.
            // It's pretty tired thing.
            // For sorting style and avoid this tired thing, I prefer to write bracket always.
            'props': 'always',
            // I think we also enable this for children,
            // but the current rule impl. is pretty buggy and noisey. It's better to disable it.
            'children': 'ignore',
        }],
        // I seem this is too strict.
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-pascal-case': [2, {
            'allowAllCaps': false,
            'ignore': [],
        }],
        // This is good for maintainability by avoiding passing unintentional extra props.
        'react/jsx-props-no-spreading': ['error', {
            'html': 'enforce',
            'custom': 'enforce',
            'explicitSpread': 'enforce',
            'exceptions': [],
        }],
        'react/jsx-sort-default-props': 0,
        'react/jsx-sort-props': 0, // we cannot force alphabetical order to our old codebase, and this is meaningless.
        'react/jsx-props-no-multi-spaces': 1,
        'react/jsx-tag-spacing': [1, {
            'closingSlash': 'never',
            'beforeClosing': 'never',
            'beforeSelfClosing': 'allow', // Allow to write more XML-ly
            'afterOpening': 'never',
        }],
        'react/jsx-uses-react': 1,
        'react/jsx-uses-vars': 1,
        'react/jsx-wrap-multilines': 2,
    }
};
