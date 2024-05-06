import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieGrid.module.css";

const MovieGrid = ({ data, isLoading }) => {
  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>Most Recent Movies</h3>

      <div className={styles.gridContainer}>
        {isLoading ? (
          <p>Loading...</p>
        ) : data?.results.length > 0 ? (
          data?.results.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        ) : (
          <p>No movies found!</p>
        )}
      </div>
    </section>
  );
};

export default MovieGrid;
