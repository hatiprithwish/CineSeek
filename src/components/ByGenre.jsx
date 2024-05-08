import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { Clapperboard } from "lucide-react";

const ByGenre = () => {
  const [genres, setGenres] = useState(null);
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState(878);

  useEffect(() => {
    const fetchGenres = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=067f167048aba054e8faaf87d2da84ba`
        );
        const genreList = await response.json();
        // console.log(genreList.genres);
        setGenres(genreList.genres);
      } catch (error) {
        console.log(`Error in fetching movies: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      setIsLoading(true);

      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjdmMTY3MDQ4YWJhMDU0ZThmYWFmODdkMmRhODRiYSIsInN1YiI6IjY2MzViYTczNjNlNmZiMDEyNjZlOTcwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e3slOiAysfyE595qtYDKADwIRBcYb4uKk8Lr0TXQDJw",
          },
        };

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=4&include_adult=false`,
          options
        );
        const movieList = await response.json();
        console.log(movieList);
        setMovies(movieList.results);
      } catch (error) {
        console.log(`Error in fetching movies: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPopularMovies();
  }, [filter, setFilter]);

  return (
    <section className="w-full my-10" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-12 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
          By Genre
        </p>

        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-8 overflow-x-scroll scrollbar-none">
          {genres &&
            genres.map((genre) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={genre.id}
                className={`group ${
                  filter === genre.id ? "bg-cartNumBg" : "bg-card"
                } w-36 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg`}
                onClick={() => setFilter(genre.id)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    filter === genre.id ? "bg-white" : "bg-cartNumBg"
                  } group-hover:bg-white flex items-center justify-center`}
                >
                  <Clapperboard
                    className={`${
                      filter === genre.id ? "text-textColor" : "text-white"
                    } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter === genre.id ? "text-white" : "text-textColor"
                  } group-hover:text-white mx-2`}
                >
                  {genre.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w-full">
          <RowContainer
            flag={false}
            data={movies?.filter((movie) => movie.genre_ids.includes(filter))}
          />
        </div>
      </div>
    </section>
  );
};

export default ByGenre;
