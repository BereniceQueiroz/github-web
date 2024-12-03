module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  // ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'eslint-plugin-import-helpers',
    'typescript-sort-keys',
    'sort-destructure-keys',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['/^react/', 'module', '/^~/', ['parent', 'sibling', 'index']],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
  },
};
