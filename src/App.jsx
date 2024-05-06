import { AnimatePresence } from "framer-motion";

import Navbar from "./components/shared/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Navbar />

        <main className="mt-28 px-4 md:px-16 w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
