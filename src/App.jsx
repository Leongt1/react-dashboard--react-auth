import { Route, Routes } from 'react-router-dom'

import './styles/global.scss'

import SignIn from './pages/signin/SignIn'
import Dashboard from './pages/dashboard/Dashboard'

function App() {

  return (
    <Routes>
      <Route path='/signin' element={<SignIn />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App
