import { FlatCompat } from '@eslint/eslintrc'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
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
  ...compat.config({
    extends: ['next/core-web-vitals']
  }),
  {
    plugins: {
      prettier: eslintPluginPrettier,
      'simple-import-sort': eslintPluginSimpleImportSort
    },
    rules: {
      'prettier/prettier': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  },
  eslintConfigPrettier
]

export default eslintConfig
