import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ASimplePage from './pages/ASinglePage';
import TaskFlow from './pages/TaskFlow';
import HttpTracer from './pages/HttpTracer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/a-simple-page' element={<ASimplePage />} />
        <Route path='/taskflow' element={<TaskFlow />} />
        <Route path='/http-tracer' element={<HttpTracer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
