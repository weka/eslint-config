module.exports = {
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true }
  },
  settings: {
    'import/resolver': { typescript: {} },
    react: { version: 'detect' }
  },
  env: { browser: true },
  plugins: [
    'babel',
    'react',
    'promise',
    'unused-imports',
    'prettier',
    'react-hooks',
    '@weka/weka'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    semi: ['error', 'never'],
    curly: 'warn',
    'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
    'max-len': ['error', 150, 2, { ignoreTemplateLiterals: true }],
    'max-params': ['error', 4],
    'comma-dangle': ['error', 'never'],
    'linebreak-style': 'off',
    'dot-location': ['error', 'property'],
    'class-methods-use-this': 'off',
    'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
    'object-curly-spacing': ['error', 'always'],
    'jsx-quotes': ['error', 'prefer-single'],
    'jsx-no-bind': 'off',
    'no-debugger': 'off',
    'no-param-reassign': 'off',
    'no-unused-expressions': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'no-bitwise': 'off',
    'no-plusplus': 'off',

    '@typescript-eslint/no-unused-vars': 'off',

    '@weka/weka/no-empty-strings': 'error',

    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true, packageDir: './' }],

    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],

    'react/jsx-no-bind': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
    'react/react-in-jsx-scope': 'off',
    'react/forbid-prop-types': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/no-did-mount-set-state': 'off',
    'react/no-danger': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'jsx-a11y/role-support-aria-props': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',

    'prettier/prettier': 'warn'
  }
}
