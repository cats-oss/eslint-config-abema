# eslint-config-abema

## Basic Principles for Settings

- Ban a dangerous style.
- Sort a style to avoid errors and to increase productivity.
- We set rules as _error_ if we think such style causes mistake easily ABSOLUTELY.
  - In other words, we make them an error that dangerous, foot-gun, or explicit mistake.
- We set rules as _warn_,  if we think such style might be ugly
  but it's useful for debugging or you might write when trying an approach.
  - You can land a patch without fixing warning. But YOU should fix them.
- We set rules as _off_ if it is just a stylistic problem and there are no increasing any productivity.
- This rule set treats ECMA262 6th (ECMA2015) or later one as Tier 1 state.
  If you use this rules in ~ES5 environment, you may need to set some options.


## How To Use

### 1. install to your project

- as npm package (TBD)
- Specify tar.gz to a dependency field in your package.json.
  - `"eslint-config-fluct": "https://github.com/cats-oss/eslint-config-abema/archive/<COMMIT_HASH>.tar.gz"`.
  - Please replace `<COMMIT_HASH>` with tag name (e.g. `v1.2.3`), or an arbitary commit hash.
    - You can specify `master` or other branch directly. But we don't recommend it strongly.


### 2. Import via `extends` fields in your .eslintrc.js

```javascript
'use strict';

module.exports = {
    'extends': [
        './node_modules/eslint-config-abema/config/eslintrc_core.js', // for eslint's builtin rules.
        './node_modules/eslint-config-abema/config/eslintrc_node.js', // for eslint-plugin-node
        './node_modules/eslint-config-abema/config/eslintrc_react.js', // for eslint-plugin-react
    ]
};
```

- see also: [ESLint's document](http://eslint.org/docs/user-guide/configuring)

### 3. Set your constomized settings.

- Set [`env`](http://eslint.org/docs/user-guide/configuring#specifying-environments),
  [`parserOptions`](http://eslint.org/docs/user-guide/configuring#specifying-parser-options),
  or others as you like.

#### Examples

- [For web browsers which support only ES5](./example/ES5_BROWSER.md).


## License

- [The MIT License](./LICENSE.txt). ([Original](https://opensource.org/licenses/MIT))
- We comply and inherit the license for the original source code.


 ## Dependencies

- [yarn](https://yarnpkg.com/)
  - We uses the latest now.
