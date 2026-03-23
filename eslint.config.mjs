import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import jsdoc from "eslint-plugin-jsdoc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  ...compat.extends("next/core-web-vitals"),
  {
    ignores: ["**/__snapshots__/**", ".next/**", "node_modules/**"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      jsdoc,
    },
    rules: {
      "jsdoc/require-jsdoc": [
        "error",
        {
          contexts: [
            "ExportDefaultDeclaration > FunctionDeclaration",
            "ExportNamedDeclaration > FunctionDeclaration",
          ],
          require: {
            ArrowFunctionExpression: false,
            ClassDeclaration: false,
            FunctionDeclaration: true,
            FunctionExpression: false,
            MethodDefinition: false,
          },
        },
      ],
      "max-lines-per-function": [
        "error",
        {
          IIFEs: true,
          max: 20,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
    },
    settings: {
      jsdoc: {
        mode: "typescript",
      },
    },
  },
  {
    files: ["**/*.test.{js,jsx,ts,tsx}", "**/jest.setup.{js,ts}"],
    rules: {
      "jsdoc/require-jsdoc": "off",
      "max-lines-per-function": "off",
    },
  },
];

export default config;
