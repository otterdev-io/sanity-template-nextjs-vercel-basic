module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  ignorePatterns: [
    "node_modules/*",
    "studio/node_modules/*",
    ".next/*",
    ".out/*",
    "!.prettierrc.js",
    "studio/dist/*",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "airbnb/hooks",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-unused-prop-types": "off",
    "import/order": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "import/prefer-default-export": "off",
    "no-undef": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "import/extensions": [
      "error",
      "never",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "no-unused-vars": "warn",
    "no-case-declarations": "off",
    "no-underscore-dangle": "off",
    "no-shadow": "off",
    "consistent-return": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "@react/jsx-one-expression-per-line": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
  },
};
