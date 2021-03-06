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
    'no-await-in-loop': 'error',
  },
};
