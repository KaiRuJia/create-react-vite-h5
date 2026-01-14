import VConsole from 'vconsole';

let vconsole: VConsole | null = null;

// 仅在开发环境加载 VConsole
if (import.meta.env.DEV || import.meta.env.VITE_APP_ENV === 'test') {
  vconsole = new VConsole({
    theme: 'light',
    defaultPlugins: ['system', 'network', 'element', 'storage'],
    disableLogScrolling: false,
    onReady: () => {
      console.log('VConsole 已初始化');
    },
  });
}

export default vconsole;