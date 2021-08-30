module.exports = {
  extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
      "plugin:jest/recommended",
      "plugin:jest/style",
  ],
  rules: {
      "prefer-const": [2, {
          "destructuring": "all",
      }],
      "no-irregular-whitespace": 0,
      "node/no-unsupported-features/es-syntax": 0,
      "node/no-unpublished-import": 0,
      "node/no-missing-import": 0,
      "node/no-extraneous-import": 0,
      "@typescript-eslint/no-empty-interface": 0,
      "@typescript-eslint/explicit-module-boundary-types": 0,
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/ban-ts-comment": 0,
      "@typescript-eslint/no-empty-function": 0,
      "node/no-extraneous-require": 0,
      "node/no-unpublished-require": 0,
      "import/default": 0,
      "import/no-named-as-default": 0,
      "import/no-named-as-default-member": 0,
      "react/prop-types": 0,
      "react/display-name": 0,
      "@typescript-eslint/no-unused-vars": 0,
      "no-case-declarations": 0,
  },
  ignorePatterns: ["src/generated"],
  plugins: [
      "@typescript-eslint",
      "react-hooks",
      "react",
      "import",
      "jest",
  ],
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
      "ecmaVersion": 2020,
      "ecmaFeatures": {
          "jsx": true,
          "modules": true,
      },
      "sourceType": "module",
  },
  env: {
      "jest/globals": true,
      "browser": true,
      "amd": true,
      "node": true,
  },
  settings: {
      "react": {
          "version": "detect",
      },
      "import/ignore": [
          ".(scss|less|css)$",
      ],
      "import/resolver": {
          "typescript": {
              "alwaysTryTypes": true,
          },
      },
  },
  overrides: [
      {
        "files": ["*.spec.ts"],
        "rules": {
          "jest/expect-expect": "off"
        }
      }
    ]
};
