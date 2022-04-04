module.exports = {
  // extends: ["next", "prettier"],
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:@next/next/recommended",
    "prettier",
  ],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-props-no-spreading": 0,
    "no-console": 0,
    "no-nested-ternary": 1,
  },
};
