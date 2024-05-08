import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { MinusCircle, PlusCircle } from "lucide-react";

let items = [];

const FavItem = ({ item, setFlag, flag }) => {
  //   const [{ FavItems }, dispatch] = useStateValue();
  //   const [qty, setQty] = useState(item.qty);

  //   const cartDispatch = () => {
  //     localStorage.setItem("FavItems", JSON.stringify(items));
  //     dispatch({
  //       type: actionType.SET_FavItemS,
  //       FavItems: items,
  //     });
  //   };

  //   const updateQty = (action, id) => {
  //     if (action == "add") {
  //       setQty(qty + 1);
  //       FavItems.map((item) => {
  //         if (item.id === id) {
  //           item.qty += 1;
  //           setFlag(flag + 1);
  //         }
  //       });
  //       cartDispatch();
  //     } else {
  //       // initial state value is one so you need to check if 1 then remove it
  //       if (qty == 1) {
  //         items = FavItems.filter((item) => item.id !== id);
  //         setFlag(flag + 1);
  //         cartDispatch();
  //       } else {
  //         setQty(qty - 1);
  //         FavItems.map((item) => {
  //           if (item.id === id) {
  //             item.qty -= 1;
  //             setFlag(flag + 1);
  //           }
  //         });
  //         cartDispatch();
  //       }
  //     }
  //   };

  //   useEffect(() => {
  //     items = FavItems;
  //   }, [qty, items]);

  return (
    <div className="w-full p-1 px-2 rounded-lg bg-FavItem flex items-center gap-2">
      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        alt=""
      />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-black">{item?.original_title}</p>
        <p className="text-sm block text-black font-semibold">
          {/* $ {parseFloat(item?.price) * qty} */}
        </p>
      </div>

      {/* button section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("remove", item?.id)}
        >
          <MinusCircle className="text-black " />
        </motion.div>

        <p className="w-5 h-5 rounded-sm  text-black flex items-center justify-center">
          {/* {qty} */} 0
        </p>

        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("add", item?.id)}
        >
          <PlusCircle className="text-black " />
        </motion.div>
      </div>
    </div>
  );
};

export default FavItem;
