module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:import/recommended",
    "@vue/eslint-config-typescript",
    "plugin:import/typescript",
  ],
  settings: {
    "import/internal-regex": "^@/",
    "import/ignore": "vite\\.config\\.ts",
  },
  rules: {
    "import/no-unresolved": "off",
    "import/order": [
      "warn",
      { alphabetize: { order: "asc", orderImportKind: "asc" } },
    ],
    "sort-imports": ["warn", { ignoreDeclarationSort: true }],
    "vue/multi-word-component-names": "off",
  },
};
