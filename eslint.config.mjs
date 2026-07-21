import js from "@eslint/js";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

const defaultConfig = [
  ...nextCoreWebVitals,
  {
    ignores: [
      "dist",
      "node_modules",
      "public",
      "LICENSE",
      "pnpm-lock.yaml",
      "index.html",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      "react-refresh": reactRefresh,
      react,
      "react-hooks": reactHooks,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/no-unescaped-entities": 0,
      // TODO:  camelcase: "error",
      "no-duplicate-imports": "error",
      "react/prop-types": 0,
      "linebreak-style": ["warn", "unix"],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-undef": "off", // Disable no-undef since React 19 doesn't require React imports
    },
  },
];

export default defaultConfig;
