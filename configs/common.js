module.exports = {
  extends: ["eslint:recommended", "prefer-arrow", "import"],
  rules: {
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
      },
    ],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    semi: ["error", "always"],
    "prefer-const": [
      "error",
      {
        destructuring: "all",
      },
    ],
    "brace-style": ["error"],
    "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
    "comma-spacing": ["error"],
    "generator-star-spacing": ["error", { before: false, after: true }],
    "eol-last": ["error", "always"],
    "arrow-spacing": ["error"],
    "space-in-parens": ["error"],
    "no-multi-spaces": ["error"],
    "no-trailing-spaces": ["error"],
    "no-console": "off",
    "object-curly-spacing": ["error", "always"],
    "keyword-spacing": ["error", { after: true }],
    "array-bracket-spacing": ["error"],
    "max-lines": [
      "error",
      {
        max: 600,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    "space-before-blocks": ["error"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        objects: "always-multiline",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
    "linebreak-style": "off",
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: true,
      },
    ],
    "func-style": [
      "error",
      "expression",
      {
        allowArrowFunctions: true,
      },
    ],
    "import/no-default-export": "error",
    "arrow-body-style": ["error", "as-needed"],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          "external",
          "builtin",
          "internal",
          "sibling",
          "parent",
          "index",
        ],
      },
    ],
  },
};
