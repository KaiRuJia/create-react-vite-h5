import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import postcssPxtorem from 'postcss-pxtorem';
import autoprefixer from 'autoprefixer';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // 插件数组
    plugins: [
      react(),
      // 仅在生产环境启用
      mode === 'prod' && viteCompression({
        algorithm: 'gzip', // or 'brotliCompress'
        threshold: 1024,   // 超过 1KB 才压缩
        deleteOriginFile: false // 是否删除原始文件（一般设为 false）
      }),
      // 添加 visualizer 插件
      mode === 'prod' && visualizer({
        open: true,           // 构建完成后自动在浏览器打开报告
        gzipSize: true,       // 显示 gzip 压缩后的体积（更真实）
        brotliSize: true,     // 同时显示 Brotli 体积
        filename: 'stats.html' // 报告输出文件名
      })
    ],
    // 模块解析配置
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    // 开发服务器配置
    server: {
      open: true,
      port: 3000,
      cors: true,
      strictPort: false, //端口被占用时，是否直接退出
      proxy: {
        '/dev': {
          target: 'http://111111.cn/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev/, ''),
          // configure: (proxy, options) => {},
          ws: true
        },
      },
      warmup: {
        // clientFiles: ['./src/views/app/Home.vue'] //预热常用文件，提高初始页面加载速度
      }
    },
    // 构建配置
    build: {
      sourcemap: mode === 'dev',
      target: 'es2015',
      // 启用 brotli 压缩
      brotliSize: true,
      chunkSizeWarningLimit: 2048, // 警告阈值（KB）
      reportCompressedSize: false,
      assetsDir: 'build',
      assetsInlineLimit: 4096, // <4kb 的资源转 base64 内联（默认 4kb）
      rollupOptions: {
        output: {
          chunkFileNames: `js/[name]-[hash].js`, // 引入文件名的名称
          entryFileNames: `js/[name]-[hash].js`, // 包的入口文件名称
          assetFileNames: `[ext]/[name]-[hash].[ext]`, // 资源文件像 字体，图片等
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'antd-mobile-vendor': ['antd-mobile', 'antd-mobile-icons'],
          },
        },
      },
    },
    // css 相关配置
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: '[local]_[hash:base64:5]',
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
      postcss: {
        plugins: [
          autoprefixer(),
          postcssPxtorem({
            rootValue: 37.5, // 1rem = 37.5px（对应 375px 设计稿）
            propList: ['*'], // 所有属性都转换
            selectorBlackList: ['.adm-', '.safe-area-', '.no-rem'], // 忽略含 .no-rem 的选择器
            replace: true,
            mediaQuery: false,
            minPixelValue: 2,       // 小于 2px 的不转换（避免 1px 边框消失）
            exclude: /node_modules/i, // 排除 node_modules
          }),
        ],
      },
    },
    // 全局常量替换（类似 DefinePlugin）
    define: {
      'import.meta.env.VITE_APP_ENV': JSON.stringify(env.VITE_APP_ENV),
      'import.meta.env.VITE_APP_TITLE': JSON.stringify(env.VITE_APP_TITLE),
      'import.meta.env.VITE_API_BASE_URL': JSON.stringify(env.VITE_API_BASE_URL),
    },
  };
});
