import { join } from 'path'

import { defineConfig } from 'vite'
import { defineConfig as defineVitestConfig } from 'vitest/config'

const vitestConfig = defineVitestConfig({
  test: {
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['html', 'json', 'test']
    }
  }
})

export default defineConfig({
  resolve: {
    alias: {
      '@config': join(__dirname, 'config'),
      '@core': join(__dirname, 'src/core'),
      '@modules': join(__dirname, 'src/modules'),
      '@test': join(__dirname, 'test')
    }
  },
  test: vitestConfig.test
})