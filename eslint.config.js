import globals from 'globals'
import pluginJs from '@eslint/js'
import standard from 'eslint-config-standard'
import pluginN from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'
import pluginImport from 'eslint-plugin-import'

const config = [
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.mocha, // I am using mocha, remove if not needed...
        ...globals.node,
      }
    }
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      n: pluginN,
      import: pluginImport,
      promise: pluginPromise
    },
    rules: standard.rules
  },
  {
    ignores: ['coverage/', 'dist/', 'lib/']
  }
]

export default config