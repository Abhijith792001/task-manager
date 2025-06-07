import './App.css'

import '@fontsource/open-sans';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './service/Auth';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
