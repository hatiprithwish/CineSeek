import { motion } from "framer-motion";
import { Ban, MoveLeft, MoveRight } from "lucide-react";
import FavItem from "../components/FavItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isFavVisible, removeMovie } from "../redux/favoriteSlice";

const FavoritesPage = () => {
  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);
  const favoriteItems = useSelector((state) => state.favorite.movies);
  const dispatch = useDispatch();
  const user = localStorage.getItem("user");

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 left-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]"
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
          onClick={() => dispatch(removeMovie())}
        >
          <Ban size={16} /> Clear
        </motion.p>

        <p className="text-textColor text-lg font-semibold">Favorites</p>

        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => dispatch(isFavVisible(false))}
        >
          <MoveRight className="text-textColor text-3xl" />
        </motion.div>
      </div>

      {favoriteItems && favoriteItems.length > 0 ? (
        <div className="w-full h-full rounded-t-[2rem] flex flex-col">
          <div className="w-full min-h-screen px-6 py-10 flex flex-col gap-3 overflow-y-scroll">
            {favoriteItems &&
              favoriteItems.length > 0 &&
              favoriteItems.map((item) => (
                <FavItem
                  key={item.id}
                  item={item}
                  setFlag={setFlag}
                  flag={flag}
                />
              ))}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src="./emptyCart.svg" className="w-300" alt="" />
          <p className="text-xl text-textColor font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default FavoritesPage;
