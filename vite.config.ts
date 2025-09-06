import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
// import macrosBabelPlugin from 'vite-plugin-babel-macros'
import { lingui } from '@lingui/vite-plugin'
import Unimport from 'unimport/unplugin'
import Unocss from 'unocss/vite'
import babel from 'vite-plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    babel({
      filter: /\.tsx?$/,
      babelConfig: {
        presets: ['@babel/preset-typescript'],
        plugins: [
          'babel-plugin-react-compiler',
          '@lingui/babel-plugin-lingui-macro',
        ],
      },
    }),
    reactRouter(),
    // macrosBabelPlugin(),
    lingui(),
    Unocss(),
    Unimport.vite({
      presets: ['react', 'react-router'],
      dirs: [
        './src/components/**',
        './src/queries/**',
        './src/stores/**',
        './src/middlewares/**',
        './src/utils/**',
      ],
      dts: true,
    }),
  ],
  resolve: { alias: { '@': '/src' } },
  server: {
    proxy: {
      '/ping': 'http://localhost:8080',
      '/doc': 'http://localhost:8080',
    },
  },
})
