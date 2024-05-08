import { useSelector } from "react-redux";
import ByGenre from "../components/ByGenre";
import Hero from "../components/Hero";
import NowPlaying from "../components/NowPlaying";
import FavoritesPage from "./FavoritesPage";

const HomePage = () => {
  const showFav = useSelector((state) => state.favorite.showFav);
  console.log(showFav);
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <Hero />
      <NowPlaying />
      <ByGenre />

      {showFav && <FavoritesPage />}
    </div>
  );
};

export default HomePage;
