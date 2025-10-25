import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.ts'],
        languageOptions: {
            parserOptions: {
                project: './tsconfig.json',
            },
        },
    },
    {
        files: ['**/*.js'],
        languageOptions: {
            parser: null, // disable TypeScript parser for JS
        },
    },
    {
        ignores: ['dist/**', 'node_modules/**', 'src/lib/db/config.js'],
    }
);