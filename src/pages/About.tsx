import { Card } from 'antd-mobile'
import styles from './About.module.less'

function About() {
  return (
    <div style={{ padding: '20px' }}>
      <div className={styles.container}>
        <h1 className={styles.title}>关于我们</h1>
      </div>

      <Card className={styles.card}>
        <div className={styles.content}>
          <h3>项目介绍</h3>
          <p>这是一个基于 React + Vite + antd-mobile 的移动端 H5 项目模板。</p>
          
          <h3>技术栈</h3>
          <ul className={styles.techList}>
            <li>React 19</li>
            <li>TypeScript</li>
            <li>Vite</li>
            <li>antd-mobile</li>
            <li>React Router</li>
            <li>Less / Sass</li>
            <li>CSS Modules</li>
          </ul>

          <h3>特性</h3>
          <ul className={styles.featureList}>
            <li>✅ 快速的构建速度</li>
            <li>✅ 优秀的开发体验</li>
            <li>✅ 移动端适配</li>
            <li>✅ 组件化开发</li>
            <li>✅ 类型安全</li>
          </ul>
        </div>
      </Card>
    </div>
  )
}

export default About
