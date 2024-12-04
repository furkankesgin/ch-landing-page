module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:unicorn/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "import",
    "react",
    "unicorn"
  ],
  rules: {
    "quotes": [2, "double"],
    "indent": ["error", "tab"],
    "no-unused-vars": "off",
    "no-multi-spaces": ["error"],
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": "off",
    "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
    "import/newline-after-import": ["error", { "count": 2 }],
    "import/no-unresolved": ["error", { ignore: ["^@/assets"] }],
    "unicorn/better-regex": "error",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        "replacements": {
          "props": false,
        }
      }
    ],
    "react/jsx-newline": ["error", { "prevent": true, "allowMultilines": true }],
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-max-props-per-line": ["error", { "maximum": 1 }],
    "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
    "react/jsx-closing-tag-location": "error",
    "react/jsx-child-element-spacing": "error",
    "react/jsx-one-expression-per-line": ["error", { "allow": "literal" }],
    "import/order": ["error",
      {
        "groups": [
          ["builtin", "external"],
          "internal",
          ["parent", "sibling", "index"],
          ["unknown"]
        ],
        "pathGroups": [
          {
            "pattern": "next/**|react",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "@mui/**",
            "group": "external",
            "position": "after"
          },
          {
            "pattern": "@/**",
            "group": "internal",
            "position": "after"
          }
        ],
        "named": true,
        "pathGroupsExcludedImportTypes": ["builtin"],
        "newlines-between": "always",
        "alphabetize": { "order": "asc", "caseInsensitive": true }
      }
    ],
    "@typescript-eslint/member-delimiter-style": ["error",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": true
        }
      }
    ]
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src/']],
        extensions: ['.ts', '.js', '.tsx'],
      },
    },
  }
}