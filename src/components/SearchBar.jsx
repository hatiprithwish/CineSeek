import { useEffect, useState } from "react";
import { useSearchData } from "../store/SearchDataProvider";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setSearchData } = useSearchData();

  const handleKeyDown = () => {};

  const fetchSearchedMovies = async () => {
    setIsLoading(true);

    try {
      // console.log(inputValue);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=067f167048aba054e8faaf87d2da84ba&query=${inputValue}&include_adult=false&language=en-US&page=1`
        // options
      );
      const searchMovies = await response.json();

      // console.log(searchMovies);
      setSearchData(searchMovies);
    } catch (error) {
      console.log(`Failed to search movie: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchedMovies();
  }, [inputValue, setInputValue]);

  return (
    <div className="w-full rounded-full bg-white flex border-2 border-[rgba(192, 196, 204, 1)] gap-2 mx-auto p-2">
      <input
        type="text"
        placeholder="Search for a movie"
        onKeyDown={(e) => setInputValue(e.target.value)}
        className="border-none bg-transparent flex-1 px-4 focus:outline-none"
      />
      <img src="/search.svg" className="w-5 mr-2 cursor-pointer" />
    </div>
  );
};

export default SearchBar;
