# d-hussar ESLint Plugin

[![GitHub license](https://img.shields.io/github/license/d-hussar/eslint-plugin?style=flat-square)](https://github.com/d-hussar/eslint-plugin/blob/master/LICENSE)

## Installation

The plugin uses [`@typescript-eslint/parser`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser) even for javascript projects.

```sh
npm i --save-dev @d-hussar/eslint-plugin
```


**Note: make sure that your project has [`typescript`](https://www.npmjs.com/package/typescript) and [`eslint`](https://www.npmjs.com/package/eslint) installed.**

## Usage

Add `@d-hussar` to the _plugins_ section of a `.eslintrc` file. In the _extends_ section add the desired config.

```json
{
  "plugin": [
    "@d-hussar"
  ],
  "extends": [
    "plugin:@d-hussar/javascript"
  ]
}
```

**Note: make sure the appropriate extensions are passed in the `eslint` command. By default, `eslint` searches only for `.js` files.**

## Configs

The plugin contains two configs:

* `plugin:@d-hussar/javascript` describes general rules
* `plugin:@d-hussar/typescript` contains javascript config and rules specific for TS


## License

The code is licensed under [MIT](https://github.com/d-hussar/eslint-plugin/blob/master/LICENSE).
