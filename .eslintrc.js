const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:cypress/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['@typescript-eslint', 'cypress', 'prettier', 'react'],
  rules: {
    'prettier/prettier': WARNING,
    'no-shadow': ERROR,
    'no-unused-vars': [ERROR, { args: 'none' }],
    'react/react-in-jsx-scope': OFF,
  },
  env: {
    browser: true,
    'cypress/globals': true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 9,
  },
};
