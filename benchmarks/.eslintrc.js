module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/ban-ts-comment": "warn",
    "constructor-super": "warn",
    "default-param-last": "warn",
    eqeqeq: "warn",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "for-direction": "warn",
    "getter-return": "warn",
    "no-async-promise-executor": "warn",
    "no-case-declarations": "warn",
    "no-compare-neg-zero": "warn",
    "no-cond-assign": "warn",
    "no-debugger": "warn",
    "no-delete-var": "warn",
    "no-dupe-args": "warn",
    "no-dupe-keys": "warn",
    "no-empty": "warn",
    "no-empty-function": "warn",
    "@typescript-eslint/no-empty-interface": "warn",
    "no-eval": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "no-new-symbol": "warn",
    "no-prototype-builtins": "warn",
    "no-setter-return": "warn",
    "no-sparse-arrays": "warn",
    "no-throw-literal": "warn",
    "no-unsafe-finally": "warn",
    "no-var": "warn",
    "no-with": "warn",
    "require-yield": "warn",
    "use-isnan": "warn",
    "valid-typeof": "warn",
  },
};