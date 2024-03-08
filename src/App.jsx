import './App.css'
import Navbar from './pages/Navbar'
import {  Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {

  return (
    <>
      <Navbar />

      <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      </div>
      <footer>
        <p>&copy; 2024 Gouransh. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
