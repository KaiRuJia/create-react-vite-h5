import { Avatar, List, Button, Space, Toast } from 'antd-mobile'
import styles from './Profile.module.less'
import '@/global.less'

function Profile() {
  const handleEdit = () => {
    Toast.show('编辑资料功能开发中...')
  }

  const handleSettings = () => {
    Toast.show('设置功能开发中...')
  }

  return (
    <div style={{ padding: '20px' }}>
      <div className={styles.header}>
        <Avatar src='' style={{ '--size': '80px', '--border-radius': '50%' }} />
        <div className={styles.userInfo}>
          <h2 className={styles.userName}>用户名</h2>
          <p className={styles.userDesc}>这是一段个人简介</p>
        </div>
      </div>

      <div className='global-less-container'>
        <h2 className='global-less-title'>普通 Less 样式</h2>
        <p className='global-less-content'>
          使用 import './global.less' 导入，样式类名不会生成哈希值，是全局样式
        </p>
      </div>

      <List header='个人信息' className={styles.list}>
        <List.Item extra='user@example.com'>邮箱</List.Item>
        <List.Item extra='138****8888'>手机号</List.Item>
        <List.Item extra='北京市朝阳区'>地址</List.Item>
      </List>

      <List header='其他信息' className={styles.list}>
        <List.Item extra='2024-01-01'>注册时间</List.Item>
        <List.Item extra='普通会员'>会员等级</List.Item>
      </List>

      <Space direction='vertical' block style={{ marginTop: '20px' }}>
        <Button color='primary' block onClick={handleEdit}>
          编辑资料
        </Button>
        <Button color='default' block onClick={handleSettings}>
          设置
        </Button>
      </Space>
    </div>
  )
}

export default Profile
