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
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
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
  },
};
