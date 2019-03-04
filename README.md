# eslint-config-abema

[![CircleCI](https://circleci.com/gh/cats-oss/eslint-config-abema.svg?style=svg)](https://circleci.com/gh/cats-oss/workflows/eslint-config-abema)

* This project is presets for eslint which we use in our some internal projects.
* This project focus to construct ideal configuration.
* This project **does not target to zero-config presets**.
  * This project just target presets of rules to set up your project _conveniently_.


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
        'eslint-config-abema/config/eslintrc_core.js', // for eslint's builtin rules.
        'eslint-config-abema/config/eslintrc_import.js', // for eslint-plugin-import
        'eslint-config-abema/config/eslintrc_node.js', // for eslint-plugin-node
        'eslint-config-abema/config/eslintrc_react.js', // for eslint-plugin-react
        'eslint-config-abema/config/eslintrc_react_hooks.js', // for eslint-plugin-react-hooks

        'eslint-config-abema/config/eslintrc_typescript.js', // for @typescript-eslint/eslint-plugin. EXPERIMENTAL

        // If you'd like to use eslint-plugin-react with TypeScript, you should load this instead.
        'eslint-config-abema/config/eslintrc_typescript_react.js',
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


#### Work with [Prettier](https://github.com/prettier/prettier)

- It's the best way to use [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)


#### Work with [`@typescript-eslint/eslint-plugin-tslint`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin-tslint)

- [We don't have any plan to support it](https://github.com/cats-oss/eslint-config-abema/issues/42).


## Dependencies

- [yarn](https://yarnpkg.com/)
  - We uses the latest now.


## About This Project

* This project is forked from [voyagegroup/eslint-config-fluct](https://github.com/voyagegroup/eslint-config-fluct).
* The diff is [here](https://github.com/cats-oss/eslint-config-abema/compare/original...master).


### Why did you fork this project from the original?

Ideally, according to common culture of open source software,
we should contribute a code to the upstream (original) source code repository
instead of forking the project. It's not nice effort for open source project community
that creating a forked project recklessly and it wastes the limited humanity resource
by re-implement a similar change in each of projects.

However, we needed to maintain this by our domain specific motivations.
It's a bit hard to merge them to the upstream side by the difference of project goals
and the difference of requirement of maintainers.

Therefore, we decided to fork this project from the original one.
We thank to their effort to develop and maintain the original project.


### License

- [The MIT License](./LICENSE.txt). ([Original](https://opensource.org/licenses/MIT))
- We comply and inherit the license for the original source code.
