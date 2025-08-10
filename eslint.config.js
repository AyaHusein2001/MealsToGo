const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
module.exports = defineConfig([
  ...expoConfig,
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      'prettier/prettier': 'warn',
    },
  },
  {
    ignores: ['dist/*'],
  },
]);
