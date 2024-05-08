import { AnimatePresence } from "framer-motion";

import Navbar from "./components/shared/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        {/* <div className="max-w-[90rem] mx-auto"> */}
        <Navbar />

        <main className="mt-28 px-4 md:px-16 w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
      {/* </div> */}
    </AnimatePresence>
  );
}

export default App;
