import './App.css'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import '@fontsource/open-sans';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home';
import Login from './Components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
