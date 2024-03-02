module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "import"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/no-duplicates": "error",
    "import/no-unresolved": "error",
    "import/named": "error",
    "react/no-typos": "error",
    "react/no-unused-state": "error",
    "lodash/chaining": "off",
    "no-unused-vars": ["error", { args: "none" }],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": [
      "error",
      {
        additionalHooks:
          "(useDeepCompareEffect|useDeepCompareCallback|useDeepCompareMemo)",
      },
    ], // Checks effect dependencies
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
    react: {
      version: "detect",
    },
  },
  globals: {
    page: true,
    browser: true,
    context: true,
  },
};
