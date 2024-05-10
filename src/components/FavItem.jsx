import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { CircleX } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeMovie } from "../redux/favoriteSlice";

const FavItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full p-1 px-2 rounded-lg bg-FavItem flex items-center gap-2">
      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        className="w-20 h-20 max-w-[60px] rounded-md object-contain"
        alt="movie-poster"
      />

      <p className="text-base text-black">{item?.original_title}</p>

      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => dispatch(removeMovie(item.id))}
        >
          <CircleX className="text-black" strokeWidth={1} />
        </motion.div>
      </div>
    </div>
  );
};

export default FavItem;
