'use strict';

const ESlintConfig = require('@bootcamp-project/svelte-config').ESLintSvelteTypeScriptConfig
module.exports = {
    ...ESlintConfig,
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
		'pii/no-dob': 'off',
    }
}
