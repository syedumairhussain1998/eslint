module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-var': 'error',
    'no-alert': 'error',
    'no-console': 'error',
    'no-debugger': 'error',
    'linebreak-style': 0,
    'eol-last': 0,
    semi: 0,

  },
};
