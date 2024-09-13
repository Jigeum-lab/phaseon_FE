/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-refresh', '@typescript-eslint', 'prettier'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/no-array-index-key': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'consistent-return': 'off',
    'react/react-in-jsx-scope': 'off',
    quotes: ['error', 'single'],
    'no-mixed-spaces-and-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-console': 'off',
  },
};
