import globals from 'globals'
import pluginJs from '@eslint/js'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        ignores: ['node_modules/**'],
    },
    { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
    { languageOptions: { globals: globals.browser } },
    {
        plugins: {
            prettier: prettier,
        },
        rules: {
            'prettier/prettier': 'error', // Báo lỗi nếu mã không tuân theo quy tắc Prettier
            'no-unused-vars': 'warn',
            'no-console': 'off',
        },
    },
    pluginJs.configs.recommended,
    prettierConfig,
]
