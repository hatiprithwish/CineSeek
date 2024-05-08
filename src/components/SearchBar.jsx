import { useEffect, useState } from "react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchSearchedMovies = async () => {
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
        `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US`,
        options
      );
      const searchMovies = await response.json();

      // console.log(searchMovies);
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
