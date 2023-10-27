
import { useState } from 'react';
import './App.css'
import { movies as movieData } from './assets/movies.js';
import MovieList from './components/MovieList.jsx';



function App() {

    const [movies, setMovies] = useState(movieData);

    const onMovieDelete = (id) => {
        setMovies(state => state.filter(x => x.id !== id));
    }

    return (
        <div>
            <h1>Movie Collection</h1>

            <MovieList movies={movies.slice(0, 20)} onMovieDelete={onMovieDelete} />
        </div>
    )
}

export default App
