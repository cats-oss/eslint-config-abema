// XXX: To uniform the style of an object literals, we enable `quote-props`
/*eslint quote-props: [2, "always"] no-magic-numbers: 0 */

'use strict';

module.exports = {

    'plugins': [
        'node',
    ],

    // eslint-plugin-node
    // https://github.com/mysticatea/eslint-plugin-node
    'rules': {
        'node/no-missing-import': 0, // Node v5 don't supprt module syntax
        'node/no-missing-require': 2,
        'node/no-unpublished-import': 0, // Disable until this rule follow devDependencies
        'node/no-unpublished-require': 0, // Disable until this rule follow devDependencies
        'node/no-unsupported-features': 0, // Covered by core's `no-restricted-syntax`
        'node/shebang': 0, // we're not writing a stand alone script which requires shebang.
        'node/no-deprecated-api': 2, // we'd like to detect the case of using deprecated apis.
    }
};
