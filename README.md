# @weka/eslint-config

Shared ESLint configuration for Weka projects.

## Install

```bash
yarn add -D @weka/eslint-config
```

```bash add config dependencies
yarn add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser @weka/eslint-plugin-weka eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-babel eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unused-imports prettier
```

## Usage (Classic .eslintrc)

```json
{
  "extends": ["@weka/eslint-config"],
  // to override
  "rules": {
    "rule-name": "override value"
  }
}
```

## Usage (Flat config – ESLint 9+)

`eslint.config.js`:

```js
import config from '@weka/eslint-config/flat'
export default config
```

## Publish new version

You have to create a new release, and on each release publishing of new version will happen automatically.
