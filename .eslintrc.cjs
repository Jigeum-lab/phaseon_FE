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
  ignorePatterns: ['dist', '.eslintrc.cjs', 'commitlint.config.cjs', 'vite.config.d.ts', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-refresh', '@typescript-eslint', 'prettier', 'import'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/require-default-props': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'react/no-array-index-key': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { variables: false, functions: false }],
    'import/no-extraneous-dependencies': 'off',
    'array-callback-return': 'off',
    'default-case': 'off',
    'import/prefer-default-export': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'consistent-return': 'off',
    'react/react-in-jsx-scope': 'off',
    quotes: ['error', 'single'],
    'no-mixed-spaces-and-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-console': 'off',
  },
};
