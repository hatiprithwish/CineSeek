import ByGenre from "../components/ByGenre";
import Hero from "../components/Hero";
import NowPlaying from "../components/NowPlaying";

const HomePage = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <Hero />
      <NowPlaying />
      <ByGenre />
    </div>
  );
};

export default HomePage;
