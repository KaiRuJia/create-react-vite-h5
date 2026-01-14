import { Button, Space, Toast } from 'antd-mobile'
import styles from './Home.module.less'

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <div className={styles.container}>
        <h1 className={styles.title}>首页</h1>
        <p className={styles.description}>欢迎使用 React + Vite + antd-mobile 项目</p>
      </div>

      <div className={styles.container}>
        <h2 className={styles.title}>Less CSS Modules 示例</h2>
        <p className={styles.content}>
          Less 支持 CSS Modules，可以使用变量、嵌套等特性
        </p>
      </div>

      <Space direction='vertical' block>
        <Button color='primary' block onClick={() => {
          Toast.show('Hello antd-mobile!')
        }}>
          点击我
        </Button>
        <Button color='success' block>
          成功按钮
        </Button>
        <Button color='warning' block>
          警告按钮
        </Button>
        <Button color='danger' block>
          危险按钮
        </Button>
      </Space>
    </div>
  )
}

export default Home
