module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  globals: {
    shallow: 'readonly',
    mount: 'readonly',
    render: 'readonly',
  },
  plugins: [
    '@d-hussar',
  ],
  extends: [
    'eslint:recommended',
  ],
  rules: {
    /* Possible Errors */
    'no-await-in-loop': 'error',
    'no-console': ['error', {
      allow: ['error'],
    }],
    'no-template-curly-in-string': 'error',
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'error',

     /* Best Practices */
     'accessor-pairs': 'error',
     'array-callback-return': ['error', {
       allowImplicit: true,
     }],
     'block-scoped-var': 'error',
     'class-methods-use-this': 'error',
     'curly': 'error',
     'default-case': 'error',
     'default-case-last': 'error',
     'default-param-last': 'error',
     'dot-location': ['error', 'property'],
     'dot-notation': 'error',
     'eqeqeq': ['error', 'always'],
     'grouped-accessor-pairs': ['error', 'setBeforeGet'],
     'guard-for-in': 'error',
     'no-alert': 'error',
     'no-constructor-return': 'error',
     'no-div-regex': 'error',
     'no-else-return': 'error',
     'no-empty-function': 'error',
     'no-empty-pattern': 'error',
     'no-eq-null': 'error',
     'no-eval': 'error',
     'no-extend-native': 'error',
     'no-extra-bind': 'error',
     'no-extra-label': 'error',
     'no-fallthrough': 'error',
     'no-floating-decimal': 'error',
     'no-global-assign': 'error',
     'no-implicit-coercion': 'error',
     'no-implied-eval': 'error',
     'no-invalid-this': ['error', {
       'capIsConstructor': false,
     }],
     'no-lone-blocks': 'error',
     'no-loop-func': 'error',
     'no-magic-numbers': [
       "error",
       {
         'ignore': [1, 2],
         'ignoreArrayIndexes': true,
         'enforceConst': true,
       },
     ],
     'no-multi-spaces': 'error',
     'no-multi-str': 'error',
     'no-new-func': 'error',
     'no-new-wrappers': 'error',
     'no-octal-escape': 'error',
     'no-param-reassign': 'error',
     'no-proto': 'error',
     'no-return-assign': 'error',
     'no-script-url': 'error',
     'no-self-compare': 'error',
     'no-sequences': 'error',

     /* Strict Mode */
    'strict': ['error', 'never'],

    /* Variables */
    'no-label-var': 'error',
    'no-undef-init': 'error',
    'no-use-before-define': 'error',
  },
};
