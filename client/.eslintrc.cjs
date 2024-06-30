module.exports = {
   root: true,
   env: { browser: true, es2020: true },
   extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
   ignorePatterns: ['dist', '.eslintrc.cjs'],
   parser: '@typescript-eslint/parser',
   plugins: ['react-refresh'],
   rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'react-refresh/only-export-components': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
         'warn', // or "error"
         {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
         },
      ],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
   },
};
