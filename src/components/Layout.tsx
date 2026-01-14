import { TabBar } from 'antd-mobile';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AppOutline, UnorderedListOutline, UserOutline, SetOutline } from 'antd-mobile-icons';
import ThemeSwitcher from './ThemeSwitcher';
import styles from './Layout.module.less';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    {
      key: '/',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/about',
      title: '关于',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/mobile-adapt',
      title: '适配',
      icon: <SetOutline />,
    },
    {
      key: '/profile',
      title: '我的',
      icon: <UserOutline />,
    },
  ];

  return (
    <div className={styles.layout}>
      <div className={styles.themeSwitcher}>
        <ThemeSwitcher />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
      <div className={styles.tabBar}>
        <TabBar activeKey={location.pathname} onChange={(key) => navigate(key)}>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  );
}
