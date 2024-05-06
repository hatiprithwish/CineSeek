import { useEffect, useState } from "react";
import MovieGrid from "../MovieGrid/MovieGrid";
import { useSearchData } from "../../store/SearchDataProvider";

const HeroSection = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { searchData } = useSearchData();
  // console.log(searchData);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=067f167048aba054e8faaf87d2da84ba"
        // options
      );
      const movies = await response.json();

      setData(movies);
    } catch (error) {
      console.log(`Error in fetching movies: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(data);

  return (
    <div>
      {searchData?.results.length > 0 ? (
        <MovieGrid data={searchData} isLoading={isLoading} />
      ) : (
        <MovieGrid data={data} isLoading={isLoading} />
      )}
    </div>
  );
};

export default HeroSection;
