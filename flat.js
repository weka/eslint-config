/* eslint-disable import/no-commonjs */
const tsParser = require('@typescript-eslint/parser')
const tsPlugin = require('@typescript-eslint/eslint-plugin')
const reactPlugin = require('eslint-plugin-react')
const importPlugin = require('eslint-plugin-import')
const a11yPlugin = require('eslint-plugin-jsx-a11y')
const prettierPlugin = require('eslint-plugin-prettier')
const unusedImportsPlugin = require('eslint-plugin-unused-imports')
const promisePlugin = require('eslint-plugin-promise')
const reactHooksPlugin = require('eslint-plugin-react-hooks')
const babelPlugin = require('eslint-plugin-babel')
const wekaPlugin = require('@weka/eslint-plugin-weka')

module.exports = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': { typescript: {} }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      import: importPlugin,
      'jsx-a11y': a11yPlugin,
      prettier: prettierPlugin,
      'unused-imports': unusedImportsPlugin,
      promise: promisePlugin,
      'react-hooks': reactHooksPlugin,
      babel: babelPlugin,
      '@weka/weka': wekaPlugin
    },
    rules: {
      'prettier/prettier': 'warn',
      'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
      'jsx-quotes': [2, 'prefer-single'],
      'max-len': [2, 150, 2, { ignoreTemplateLiterals: true }],
      'object-curly-spacing': [2, 'always'],
      semi: ['error', 'never'],
      'linebreak-style': [0],
      'no-debugger': [0],
      'jsx-a11y/no-autofocus': [0],
      'comma-dangle': ['error', 'never'],
      'jsx-no-bind': [0],
      'import/no-dynamic-require': [0],
      'import/no-extraneous-dependencies': ['error', { devDependencies: true, packageDir: './' }],
      'react/jsx-no-bind': [0],
      'react/react-in-jsx-scope': [0],
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
      'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
      'react/forbid-prop-types': [0],
      'react/no-did-mount-set-state': [0],
      'react/jsx-props-no-spreading': [0],
      'react/no-danger': [0],
      'react/jsx-boolean-value': [0],
      'react/jsx-curly-brace-presence': [1, { props: 'never', children: 'never' }],
      'react/prefer-stateless-function': [1],
      'no-param-reassign': [0],
      'no-unused-expressions': [0],
      'no-underscore-dangle': [0],
      'class-methods-use-this': [0],
      'no-use-before-define': [0],
      'jsx-a11y/role-support-aria-props': [0],
      'jsx-a11y/no-static-element-interactions': [0],
      'jsx-a11y/click-events-have-key-events': [0],
      'jsx-a11y/label-has-for': [0],
      'jsx-a11y/no-noninteractive-element-interactions': [0],
      'jsx-a11y/mouse-events-have-key-events': [0],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
      'max-params': [2, 4],
      'no-trailing-spaces': ['error', { skipBlankLines: true }],
      'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
      'dot-location': ['error', 'property'],
      'no-bitwise': [0],
      'no-plusplus': [0],
      curly: 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@weka/weka/no-empty-strings': 'error'
    }
  }
]
