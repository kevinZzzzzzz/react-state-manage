import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default ({mode, command}) => {
  const env= loadEnv(mode, process.cwd());   // 获取.env文件里定义的环境变量
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    define: {
      'process.env': process.env
    },
    server: {
      port: 8881,
      host: true,
      proxy: {
        "/api": {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          secure: false, // 解决代理https协议报错问题
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          rewrite: (path: any) => path.replace(/^\/api/, ""),
        },
      }
    }
  })
}
