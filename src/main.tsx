import 'amfe-flexible'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { unstableSetRender } from 'antd-mobile'
import '@/global.less'
import App from '@/App'

unstableSetRender((node, container) => {
  const containerWithRoot = container as any
  containerWithRoot._reactRoot ||= createRoot(container)
  const root = containerWithRoot._reactRoot
  root.render(node)
  return async () => {
    await new Promise((resolve) => setTimeout(resolve, 0))
    root.unmount()
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
