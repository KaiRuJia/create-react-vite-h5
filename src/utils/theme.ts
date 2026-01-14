export interface Theme {
  name: string;
  primary: string;
  success: string;
  warning: string;
  danger: string;
  text: string;
  background: string;
}

export const themes: Record<string, Theme> = {
  default: {
    name: '默认主题',
    primary: '#1677ff',
    success: '#00b578',
    warning: '#ff8f1f',
    danger: '#ff3141',
    text: '#333333',
    background: '#ffffff',
  },
  blue: {
    name: '蓝色主题',
    primary: '#1890ff',
    success: '#52c41a',
    warning: '#faad14',
    danger: '#f5222d',
    text: '#000000',
    background: '#f5f5f5',
  },
  green: {
    name: '绿色主题',
    primary: '#52c41a',
    success: '#73d13d',
    warning: '#ffc53d',
    danger: '#ff4d4f',
    text: '#1f1f1f',
    background: '#f0f9ff',
  },
  purple: {
    name: '紫色主题',
    primary: '#722ed1',
    success: '#52c41a',
    warning: '#faad14',
    danger: '#f5222d',
    text: '#2c2c2c',
    background: '#f9f0ff',
  },
  dark: {
    name: '暗黑主题',
    primary: '#177ddc',
    success: '#49aa19',
    warning: '#d89614',
    danger: '#d32029',
    text: '#ffffff',
    background: '#141414',
  },
};

export const themeKeys = Object.keys(themes);

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.style.setProperty('--adm-color-primary', theme.primary);
  root.style.setProperty('--adm-color-success', theme.success);
  root.style.setProperty('--adm-color-warning', theme.warning);
  root.style.setProperty('--adm-color-danger', theme.danger);
  root.style.setProperty('--adm-color-text', theme.text);
  root.style.setProperty('--adm-color-background', theme.background);
}

export function getTheme(key: string): Theme {
  return themes[key] || themes.default;
}
