import { useIsModalOpen } from "../../store/ModalProvider";
import styles from "./MovieModal.module.css";

const MovieModal = ({ movie }) => {
  const { setShowModal } = useIsModalOpen();

  return (
    <div onClick={() => setShowModal(false)} className={styles.modal}>
      <div className={styles.modalContent}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className={styles.img}
        />
        <div>
          <h5>{movie.original_title}</h5>
          <p>{movie.overview}</p>
          <span>
            {movie.vote_average.toFixed(1)} / 10 ({movie.vote_count}total votes)
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
