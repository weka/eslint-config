# @weka/eslint-config

Shared ESLint configuration for Weka projects.

## Install

```bash
yarn add -D @weka/eslint-config
# or
npm i -D @weka/eslint-config
```

## Usage (Classic .eslintrc)

```json
{
  "extends": ["@weka/eslint-config"]
}
```

## Usage (Flat config – ESLint 9+)

`eslint.config.js`:

```js
import config from '@weka/eslint-config/flat'
export default config
```

## Notes
- Includes React, TypeScript, a11y, import, prettier, react-hooks, promise, and unused-imports rules.
- Includes `@weka/eslint-plugin-weka` and enables `@weka/weka/no-empty-strings`.
