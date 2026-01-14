import { Card, List, Space, Button, Toast } from 'antd-mobile';
import styles from './MobileAdapt.module.less';

function MobileAdapt() {
  const handleTest = (feature: string) => {
    Toast.show(`测试 ${feature} 功能`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 className={styles.title}>移动端适配</h1>
      <p className={styles.description}>
        项目已配置完整的移动端适配功能，包括视口优化、安全区域、触摸优化等
      </p>

      <Card title="视口配置" className={styles.card}>
        <List>
          <List.Item description="禁止用户缩放">user-scalable=no</List.Item>
          <List.Item description="最小缩放比例">minimum-scale=1.0</List.Item>
          <List.Item description="最大缩放比例">maximum-scale=1.0</List.Item>
          <List.Item description="适配刘海屏">viewport-fit=cover</List.Item>
        </List>
      </Card>

      <Card title="安全区域适配" className={styles.card}>
        <List>
          <List.Item description="顶部安全区域">--safe-area-inset-top</List.Item>
          <List.Item description="底部安全区域">--safe-area-inset-bottom</List.Item>
          <List.Item description="左侧安全区域">--safe-area-inset-left</List.Item>
          <List.Item description="右侧安全区域">--safe-area-inset-right</List.Item>
        </List>
      </Card>

      <Card title="触摸优化" className={styles.card}>
        <List>
          <List.Item description="移除点击高亮">-webkit-tap-highlight-color</List.Item>
          <List.Item description="平滑滚动">-webkit-overflow-scrolling</List.Item>
          <List.Item description="禁止过度滚动">overscroll-behavior-y</List.Item>
          <List.Item description="隐藏滚动条">::-webkit-scrollbar</List.Item>
        </List>
      </Card>

      <Card title="输入框优化" className={styles.card}>
        <List>
          <List.Item description="防止 iOS 自动缩放">font-size: 16px</List.Item>
          <List.Item description="移除默认样式">-webkit-appearance: none</List.Item>
          <List.Item description="禁用电话号码识别">format-detection: telephone=no</List.Item>
        </List>
      </Card>

      <Card title="响应式字体" className={styles.card}>
        <List>
          <List.Item description="≤ 375px">14px</List.Item>
          <List.Item description="376px - 414px">15px</List.Item>
          <List.Item description="≥ 415px">16px</List.Item>
        </List>
      </Card>

      <Card title="Web App 配置" className={styles.card}>
        <List>
          <List.Item description="全屏显示">apple-mobile-web-app-capable</List.Item>
          <List.Item description="状态栏样式">apple-mobile-web-app-status-bar-style</List.Item>
        </List>
      </Card>

      <Space direction="vertical" block style={{ marginTop: '20px' }}>
        <Button color="primary" block onClick={() => handleTest('触摸')}>
          测试触摸优化
        </Button>
        <Button color="success" block onClick={() => handleTest('滚动')}>
          测试滚动优化
        </Button>
        <Button color="warning" block onClick={() => handleTest('输入')}>
          测试输入框优化
        </Button>
      </Space>

      <div className={styles.tips}>
        <h3 className={styles.tipsTitle}>使用提示</h3>
        <ul className={styles.tipsList}>
          <li className={styles.tipsItem}>
            在 iPhone X 及以上设备上，底部 TabBar 会自动适配安全区域
          </li>
          <li className={styles.tipsItem}>点击任何元素都不会出现蓝色高亮效果</li>
          <li className={styles.tipsItem}>输入框获得焦点时不会导致页面缩放</li>
          <li className={styles.tipsItem}>滚动时具有原生应用的平滑效果</li>
          <li className={styles.tipsItem}>可以添加到主屏幕作为 Web App 使用</li>
        </ul>
      </div>
    </div>
  );
}

export default MobileAdapt;
