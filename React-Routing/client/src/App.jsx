
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Home from './components/Home';
import About from './components/About.jsx';
import Contacts from './components/Contacts.jsx';
import CharacterList from './components/CharacterList.jsx';

function App() {

  return (
    <>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/characters' element={<CharacterList />} />
      </Routes>

      <footer>All rights reserved &copy;</footer>
    </>
  )
}

export default App
