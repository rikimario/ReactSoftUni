export default function MovieList(props) {
  return (
    <div className="movie-list">
      <h2>{props.headingText}</h2>
      <ul>
        <li>{props.movies[0].title}</li>
        <li>{props.movies[1].title}</li>
        <li>{props.movies[2].title}</li>
      </ul>
    </div>
  );
};