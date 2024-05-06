import { AnimatePresence } from "framer-motion";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import MovieGrid from "./components/MovieGrid/MovieGrid";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Navbar />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <HeroSection />
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
