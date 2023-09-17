module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended',
    'prettier',
    ],
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}', '**/src/**/*.stories.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
    {
      files: ['**/src/**/*.stories.{ts,tsx}'],
      rules: {
        '@typescript-eslint/consistent-type-assertions': 'off'
      }
    },
    {
      files: ['**/build/**/*.ts', '**/selectors/**/*.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    },
    {
      files: ['cypress/support/**/*.ts'],
      rules: {
        "@typescript-eslint/no-namespace": "off",
      }
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './cypress/tsconfig.json'],
  },
  plugins: [
    'react',
    'i18next',
    "react-hooks",
    "fsd-slivki",
    "unused-imports"
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
    }],
    'i18next/no-literal-string': [
      2,
      {
        markupOnly: true,
        ignoreAttribute: [
          'to',
          'data-testid',
          'reducerKey',
          'alt', 
          'target',
          'justify',
          'align',
          'direction',
          'gap',
          'role',
          'as',
          'borderRadius',
          'feature',
          'variant',
          'activeClassName'
        ],
      }],
    'max-len': [
      'error', 
      { 
        ignoreComments: true,
        code: 110, 
        ignoreStrings: true }
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    'react/display-name': "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/prop-types": "off",
    "@typescript-eslint/no-dynamic-delete": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-invalid-void-type": "off",
    "n/no-callback-literal": "off",
    "fsd-slivki/path-check-relative": ["error", {alias: '@'}],
    "fsd-slivki/path-check-public-api": [
      "error",
      {
        alias: '@',
        testFiles: ['**/*.test.*', '**/*.stories.*', '**/StoreDecorator.tsx']
      }
    ],
    "fsd-slivki/path-check-layers": [
      "error",
      {
        alias: '@', 
        ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
      }
    ],
    "@typescript-eslint/consistent-type-imports": 'off',
    "@typescript-eslint/no-non-null-assertion": "off",
    "unused-imports/no-unused-imports": "error",
    "react/jsx-max-props-per-line": ["error", {maximum: 4}]
  },
};
