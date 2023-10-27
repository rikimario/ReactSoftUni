
import './App.css'
import { movies } from './assets/movies.js';
import MovieList from './components/MovieList.jsx';



function App() {

    return (
        <div>
            <h1>Movie Collection</h1>

            <MovieList movies={movies.slice(0, 20)} />
        </div>
    )
}

export default App
