import { useState } from "react";
import styles from "./MovieCard.module.css";
import MovieModal from "../MovieModal/MovieModal";
import { useIsModalOpen } from "../../store/ModalProvider";

const MovieCard = ({ movie }) => {
  const { showModal, setShowModal } = useIsModalOpen();

  const handleCardClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className={styles.movieCard} onClick={handleCardClick}>
        <div className={styles.moviePoster}>
          <span className={styles.movieRating}>{movie.vote_average}</span>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className={styles.img}
          />
        </div>
        <h5 className={styles.movieTitle}>{movie.original_title}</h5>
      </div>

      {showModal && <MovieModal movie={movie} />}
    </>
  );
};

export default MovieCard;
