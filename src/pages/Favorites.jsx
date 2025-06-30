import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/movieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div>
        <h2 className="favorites">Your Favorites</h2>
        <div className="movies-grid-fav">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No favorites yet.</h2>
      <p>Start adding some favourites, they will appear here</p>
    </div>
  );
}

export default Favorites;
