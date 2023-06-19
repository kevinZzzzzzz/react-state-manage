module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "@typescript-eslint/no-explicit-any": "OFF",
    "@typescript-eslint/no-empty-function": "OFF",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-unused-vars": "off"
  },
}
