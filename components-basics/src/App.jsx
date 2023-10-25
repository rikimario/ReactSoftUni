
import MovieList from './components/MovieList.jsx';
import Movies from './assets/Movies.js';
import Timer from './components/Timer.jsx';
import './App.css';



function App() {
  return (
    <div>
      <h1>My First Dynamic React Application!</h1>

      <Timer startTime={5} />

      <MovieList movies={Movies} headingText='Movie List' />
    </div >
  )
}

export default App
