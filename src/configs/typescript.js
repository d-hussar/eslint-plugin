module.exports = {
  plugins: [
    '@d-hussar',
    '@typescript-eslint',
  ],
  extends: [
    'plugin:@d-hussar/javascript',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
  },
};
