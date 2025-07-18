import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import checker from 'vite-plugin-checker'
import progress from 'vite-plugin-progress'


// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const viteEnv = loadEnv(mode, process.cwd(), '')
  return   {
    plugins: [
      react(),
      checker({ typescript: true }),
      progress(),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
    ],
    base: viteEnv.VITE_APP_BASE_URL,
    resolve: {
      // 设置文件./src路径为 @
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, './src')
        }
      ]
    },
    build: {
      sourcemap:  viteEnv.VITE_APP_NODE !== 'production',
      minify: 'esbuild',
      emptyOutDir: true,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 1000,
    },
    server: {
      open: true,
      host: 'localhost',
      port: 9900,
      proxy: {},

    }
  }
})
