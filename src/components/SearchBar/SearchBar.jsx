import { useEffect, useRef, useState } from "react";
import { useSearchData } from "../../store/SearchDataProvider";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setSearchData } = useSearchData();

  const handleKeyDown = () => {};

  const fetchSearchedMovies = async () => {
    setIsLoading(true);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDNhYjZiYmNhMWVmYzc3NmM2MDhlNjc5OWQ5MjhhNSIsInN1YiI6IjY2MzViYTczNjNlNmZiMDEyNjZlOTcwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H1a4nZFrPsxyEJPDraRgDX8CkYFJeqMj476iImJnskg",
      },
    };

    try {
      // console.log(inputValue);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`,
        options
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
    <div className={styles.searchContainer}>
      <img src="/search.svg" className={styles.searchIcon} />
      <input
        type="text"
        placeholder="Search for a movie"
        onKeyDown={(e) => setInputValue(e.target.value)}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBar;
