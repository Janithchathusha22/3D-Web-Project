module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recomnded',
    'plugin:@typescript-eslint/recomnded',
    'plugin:react-hooks/recomnded',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
