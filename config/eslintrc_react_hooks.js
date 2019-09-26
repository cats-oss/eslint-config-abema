// XXX: To uniform the style of an object literals, we enable `quote-props`
/* eslint quote-props: ['error', "always"] no-magic-numbers: 'off' */

'use strict';

module.exports = {

    'plugins': [
        'react-hooks',
    ],

    // eslint-plugin-react-hooks
    // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
    //
    //  I think we should enable these rules as 'errors' because this plugin always provides rules
    //  which detects possible errors.
    /* eslint sort-keys: 'error' */
    'rules': {
        'react-hooks/exhaustive-deps': 'error',
        'react-hooks/rules-of-hooks': 'error',
    },
};
