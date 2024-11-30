import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    "rules": {
      "indent": ["error", 2],
      "no-trailing-spaces": "error",
      "space-in-parens": ["error", "never"],
      "space-before-function-paren": ["error", "never"],
      "keyword-spacing": ["error", { before: true, after: true }],
      "space-before-blocks": ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
    },
  },
  pluginJs.configs.recommended,
];
