module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    camelcase: 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'no-param-reassign': 0,
    'array-callback-return': 0,
    'no-plusplus': 0,
    'no-await-in-loop': 0,
    'object-curly-newline': 0,
    'no-useless-escape': 0,
    'linebreak-style': 0,
    'newline-per-chained-call': 0,
    'no-restricted-syntax': 0,
  },
  ignorePatterns: ['/**/node_modules/*', '/**/tests/*', '/**/vendor/*.js'],
};
