import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Profile from '@/pages/Profile'
import Example from '@/pages/Example'
import MobileAdapt from '@/pages/MobileAdapt'

function App() {
  const test = "double quotes"
  const test2 = 'single quotes'
  const test3 = "another double"
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='profile' element={<Profile />} />
          <Route path='example' element={<Example />} />
          <Route path='mobile-adapt' element={<MobileAdapt />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
