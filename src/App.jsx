import { AnimatePresence } from "framer-motion";

import Navbar from "./components/shared/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import AuthPage from "./pages/AuthPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Navbar />

        <main className="mt-24 px-4 md:px-16 w-full flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
