import { ChevronLeft, ChevronRight } from "lucide-react";
import RowContainer from "../components/RowContainer";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NowPlaying = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=067f167048aba054e8faaf87d2da84ba`
        );
        const movies = await response.json();

        setData(movies);
      } catch (error) {
        console.log(`Error in fetching movies: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNowPlaying();
  }, []);

  return (
    <section className="w-full my-6">
      <div className="w-full flex items-center justify-between">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
          Now Playing
        </p>

        <div className="hidden md:flex gap-3 items-center">
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
            onClick={() => setScrollValue(-200)}
          >
            <ChevronLeft color="#fff" className="text-lg text-white" />
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
            onClick={() => setScrollValue(200)}
          >
            <ChevronRight color="#fff" className="text-lg text-white" />
          </motion.div>
        </div>
      </div>
      <RowContainer isLoading={isLoading} flag={true} data={data?.results} />
    </section>
  );
};

export default NowPlaying;
