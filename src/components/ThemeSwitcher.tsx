import { Picker } from 'antd-mobile';
import { useState } from 'react';
import { themes, themeKeys, applyTheme, type Theme } from '@/utils/theme';
import styles from './ThemeSwitcher.module.less';

interface ThemeSwitcherProps {
  onThemeChange?: (theme: Theme) => void;
}

export default function ThemeSwitcher({ onThemeChange }: ThemeSwitcherProps) {
  const [visible, setVisible] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('default');

  const handleThemeChange = (value: unknown[]) => {
    const themeKey = String(value[0] || 'default');
    setCurrentTheme(themeKey);
    const theme = themes[themeKey];
    applyTheme(theme);
    onThemeChange?.(theme);
  };

  const columns = [
    themeKeys.map((key) => ({
      label: themes[key].name,
      value: key,
    })),
  ];

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => setVisible(true)}>
        <span className={styles.buttonText}>切换主题</span>
        <span className={styles.currentTheme}>{themes[currentTheme].name}</span>
      </button>
      <Picker
        columns={columns}
        visible={visible}
        onClose={() => setVisible(false)}
        value={[currentTheme]}
        onConfirm={handleThemeChange}
      />
    </div>
  );
}
