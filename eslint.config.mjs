import { FlatCompat } from '@eslint/eslintrc'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  eslintConfigPrettier,
  {
    plugins: {
      prettier: eslintPluginPrettier,
      'simple-import-sort': eslintPluginSimpleImportSort
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          printWidth: 100,
          semi: false,
          singleQuote: true,
          trailingComma: 'none'
        }
      ],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  }
]

export default eslintConfig
