import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { isFavVisible } from "../../redux/favoriteSlice";

const Navbar = () => {
  const [showFav, setShowFav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const favoriteItems = useSelector((state) => state.favorite.movies);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <header
      className={`${
        location.pathname === "/auth" ? "hidden" : "block"
      } fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary`}
    >
      <div className="hidden sm:flex w-full h-full items-center justify-between gap-8">
        <Link to={"/"}>
          <img src="/logo.png" className="w-36 h-auto" alt="logo" />
        </Link>

        <SearchBar />

        <div className="relative" onClick={() => dispatch(isFavVisible(true))}>
          <Heart className="text-textColor text-2xl  cursor-pointer" />
          {favoriteItems && favoriteItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="shadow-xl flex-col absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center"
            >
              <p className="text-xs text-white font-semibold">
                {favoriteItems.length}
              </p>
            </motion.div>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:text-orange-600 text-textColor text-base"
        >
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={() => navigate("/auth")}>Signup</button>
          )}
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
