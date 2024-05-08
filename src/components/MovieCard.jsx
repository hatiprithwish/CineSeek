import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/favoriteSlice";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-275 min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
        <div className="w-full flex items-center justify-between">
          <motion.div
            className="w-40 h-40 -mt-8 drop-shadow-2xl"
            whileHover={{ scale: 1.2 }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="w-full h-full object-contain rounded-md cursor-pointer"
              onClick={() => {}}
            />
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8 px-1 py-2"
            onClick={() => {
              dispatch(addMovie(movie));
            }}
          >
            <Heart color="#fff" />
          </motion.div>
        </div>

        <div className="w-full flex flex-col items-end justify-end mt-4">
          <p className="text-textColor font-semibold text-base md:text-lg text-end">
            {movie.original_title}
          </p>

          <p className="text-textColor font-semibold flex items-center gap-1 mt-2">
            <span className="text-xs text-red-500">
              <Star size={16} />
            </span>{" "}
            {movie.vote_average}
          </p>
        </div>
      </div>

      {/* {showModal && <MovieModal movie={movie} />} */}
    </>
  );
};

export default MovieCard;
