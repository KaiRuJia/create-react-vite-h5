import { Button, Space, Toast } from 'antd-mobile';
import styles from './Home.module.less';
import { userApi } from '@/api/user';
import { debounce, throttle, cloneDeep, uniq } from 'lodash-es';

function Home() {
  const handleLogin = async () => {
    try {
      const result = await userApi.login({
        username: 'test',
        password: '123456',
      });
      console.log('登录成功:', result);
      Toast.show('登录成功');
    } catch (error) {
      console.error('登录失败:', error);
    }
  };

  const handleDebounceClick = debounce(() => {
    Toast.show('防抖点击 - 500ms 内只触发一次');
  }, 500);

  const handleThrottleClick = throttle(() => {
    Toast.show('节流点击 - 1000ms 内最多触发一次');
  }, 1000);

  const handleCloneDeep = () => {
    const original = { a: 1, b: { c: 2 } };
    const cloned = cloneDeep(original);
    cloned.b.c = 999;
    console.log('原始对象:', original);
    console.log('克隆对象:', cloned);
    Toast.show('深拷贝完成，请查看控制台');
  };

  const handleUniq = () => {
    const array = [1, 2, 1, 3, 2, 4, 3, 5];
    const uniqueArray = uniq(array);
    console.log('原数组:', array);
    console.log('去重后:', uniqueArray);
    Toast.show(`去重: [${array}] → [${uniqueArray}]`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <div className={styles.container}>
        <h1 className={styles.title}>首页</h1>
        <p className={styles.description}>欢迎使用 React + Vite + antd-mobile 项目</p>
      </div>

      <div className={styles.container}>
        <h2 className={styles.title}>Less CSS Modules 示例</h2>
        <p className={styles.content}>Less 支持 CSS Modules，可以使用变量、嵌套等特性</p>
      </div>

      <div className={styles.container}>
        <h2 className={styles.title}>Axios API 示例</h2>
        <p className={styles.content}>已配置 axios 请求拦截器、响应拦截器和错误处理</p>
      </div>

      <div className={styles.container}>
        <h2 className={styles.title}>Lodash 工具库示例</h2>
        <p className={styles.content}>已集成 lodash，提供防抖、节流、深拷贝等实用工具</p>
      </div>

      <Space direction="vertical" block>
        <Button
          color="primary"
          block
          onClick={() => {
            Toast.show('Hello antd-mobile!');
          }}
        >
          点击我
        </Button>
        <Button
          color="primary"
          block
          onClick={handleLogin}
        >
          测试登录 API
        </Button>
        <Button
          color="primary"
          block
          onClick={handleDebounceClick}
        >
          防抖点击
        </Button>
        <Button
          color="primary"
          block
          onClick={handleThrottleClick}
        >
          节流点击
        </Button>
        <Button
          color="primary"
          block
          onClick={handleCloneDeep}
        >
          深拷贝
        </Button>
        <Button
          color="primary"
          block
          onClick={handleUniq}
        >
          数组去重
        </Button>
        <Button color="success" block>
          成功按钮
        </Button>
        <Button color="warning" block>
          警告按钮
        </Button>
        <Button color="danger" block>
          危险按钮
        </Button>
      </Space>
    </div>
  );
}

export default Home;
