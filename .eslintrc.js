module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  root: true,
  extends: [
    "next/core-web-vitals",
    "next/typescript",
    "eslint:recommended",
    "@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  rules: {
    // Performance and best practices
    "prefer-const": "warn",
    "no-var": "error",
    "no-unused-vars": "off", // Handled by TypeScript
    "@typescript-eslint/no-unused-vars": "warn",
    "object-shorthand": "warn",
    "quote-props": ["warn", "as-needed"],

    // TypeScript specific
    "@typescript-eslint/array-type": ["warn", { default: "array" }],
    "@typescript-eslint/consistent-type-assertions": [
      "warn",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "never",
      },
    ],

    // React specific
    "react/jsx-fragments": ["warn", "syntax"],
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
