import { Routes, Route } from 'react-router-dom'
import { Home, Create } from './pages'

export function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create/:step' element={<Create />} />
      </Routes>
    </>
  )
}

