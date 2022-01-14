'use strict';

const JestConfig = require('@bootcamp-project/svelte-config').JestSvelte
module.exports = {
    ...JestConfig,
    coverageReporters: ['html','text'],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    }
}
