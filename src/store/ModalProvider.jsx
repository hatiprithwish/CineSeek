import { createContext, useContext, useState } from "react";

const isModalOpenContext = createContext(false);

export const useIsModalOpen = () => useContext(isModalOpenContext);

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <isModalOpenContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </isModalOpenContext.Provider>
  );
};
