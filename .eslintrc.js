const path = require('path');
module.exports = {
    // Specifies the ESLint parser
    parser: '@typescript-eslint/parser',
    plugins: ['security', '@typescript-eslint'],
    env: { browser: true },
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:security/recommended"
    ],
    parserOptions: {
        project: path.resolve(__dirname, './tsconfig.json'),
        tsconfigRootDir: __dirname,
        ecmaVersion: 'browser', // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        // '@typescript-eslint/explicit-function-return-type': 'off',
        // '@typescript-eslint/no-unused-vars': 'off'
    }
};
