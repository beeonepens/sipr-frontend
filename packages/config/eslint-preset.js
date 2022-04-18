module.exports = {
  // extends: ["next", "prettier"],
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },

  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/typescript',
    'plugin:cypress/recommended',
    'prettier',
  ],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/jsx-no-bind': [
      1,
      { allowFunctions: true, allowArrowFunctions: true },
    ],
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': 0,
    'no-nested-ternary': 1,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'jsx-a11y/label-has-associated-control': [2, { assert: 'htmlFor' }],
  },
};
