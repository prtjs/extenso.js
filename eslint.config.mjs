// @ts-check

import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    rules: {
      "indent": ["error", 2],
      "no-trailing-spaces": "error",
      "space-in-parens": ["error", "never"],
      "space-before-function-paren": ["error", "never"],
      "keyword-spacing": ["error", { before: true, after: true }],
      "space-before-blocks": ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "semi": ["error", "never"],
      "no-unused-vars": "error",
      "prefer-const": ["error", { "ignoreReadBeforeAssign": true }],
    },
  },
  tseslint.configs.strict,
  tseslint.configs.stylistic,
)