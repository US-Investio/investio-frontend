const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  root: true,
  env: {
    browser: true,
    'cypress/globals': true,
  },
  ignorePatterns: ['.eslintrc.js', 'next.config.js'],
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:cypress/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['@typescript-eslint', 'cypress', 'prettier', 'react'],
  rules: {
    'prettier/prettier': WARNING,
    'no-shadow': OFF,
    '@typescript-eslint/no-shadow': ERROR,
    'react/react-in-jsx-scope': OFF,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 9,
    project: true,
    tsconfigRootDir: __dirname,
  },
};
