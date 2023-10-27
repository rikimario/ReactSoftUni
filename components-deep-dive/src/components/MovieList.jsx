import Movie from "./Movie";

export default function MovieList({
    movies,
}) {

    // let movieList = movies.map(movie => <li><Movie {...movie} /></li>)

    return (
        <ul>
            {movies.map(movie =>
                <Movie key={movie.id} {...movie} />
            )}
        </ul>
    )


};