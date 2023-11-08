
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation.jsx';
import Home from './components/Home';
import About from './components/About.jsx';
import Contacts from './components/Contacts.jsx';

function App() {

  return (
    <>
      <h1>Rect Router</h1>

      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>

      <footer>All rights reserved &copy;</footer>
    </>
  )
}

export default App
