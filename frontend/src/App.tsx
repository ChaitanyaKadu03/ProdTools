import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ASimplePage from './pages/ASinglePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/a-simple-page' element={<ASimplePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
