module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'project': './packages/*/tsconfig.json',
    'tsconfigRootDir': './packages/*/',
    'sourceType': 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'eslint-plugin-import',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [
    '.eslintrc.js',
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'quotes': [
      2,
      'single',
      {
        'avoidEscape': true,
      },
    ],
    '@typescript-eslint/indent': [
      'error',
      2,
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    'curly': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-duplicates': 'error',
    'import/no-unassigned-import': [
      'error',
      {
        'allow': [
          'symbol-observable',
        ],
      },
    ],
    'import/order': [
      'error',
      {
        'alphabetize': {
          'order': 'asc',
        },
        'groups': [
          [
            'builtin',
            'external',
          ],
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
    'max-len': [
      'error',
      {
        'code': 150,
        'ignoreUrls': true,
      },
    ],
    'max-lines-per-function': [
      'error',
      {
        'max': 200,
      },
    ],
    'no-caller': 'error',
    'no-empty': [
      'error',
      {
        'allowEmptyCatch': true,
      },
    ],
    'no-eval': 'error',
    'no-multiple-empty-lines': 'error',
    'no-throw-literal': 'error',
    'padding-line-between-statements': [
      'error',
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'return',
      },
    ],
    'sort-imports': [
      'error',
      {
        'ignoreDeclarationSort': true,
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        'markers': [
          '/',
        ],
      },
    ],
    'no-case-declarations': 'error',
    'no-fallthrough': 'error',
    'no-underscore-dangle': 'error',
    'no-multi-spaces': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/no-empty-function': 'error',
  },
};
