import { Button, Space, Toast } from 'antd-mobile';
import styles from './Example.module.less';

function Example() {
  const handleClick = () => {
    Toast.show('短路径别名配置成功！');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>短路径别名示例</h2>
      <p className={styles.description}>使用 @ 别名可以简化模块导入，避免使用相对路径</p>

      <div className={styles.codeExample}>
        <h3 className={styles.codeTitle}>导入方式对比</h3>
        <div className={styles.codeBlock}>
          <div className={styles.codeLine}>
            <span className={styles.comment}>{'// 使用相对路径（旧方式）'}</span>
            <br />
            <span className={styles.code}>import Layout from {"'../components/Layout'"}</span>
          </div>
          <div className={styles.codeLine}>
            <span className={styles.comment}>{'// 使用短路径别名（新方式）'}</span>
            <br />
            <span className={styles.code}>import Layout from {"'@/components/Layout'"}</span>
          </div>
        </div>
      </div>

      <div className={styles.features}>
        <h3 className={styles.featuresTitle}>配置的别名</h3>
        <ul className={styles.featuresList}>
          <li className={styles.featureItem}>
            <span className={styles.alias}>@</span>
            <span className={styles.path}>→ ./src</span>
          </li>
        </ul>
      </div>

      <Space direction="vertical" block style={{ marginTop: '20px' }}>
        <Button color="primary" block onClick={handleClick}>
          测试配置
        </Button>
      </Space>
    </div>
  );
}

export default Example;
