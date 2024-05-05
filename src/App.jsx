import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import MovieGrid from "./components/MovieGrid/MovieGrid";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="divider" />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
