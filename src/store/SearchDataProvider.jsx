import React, { createContext, useContext, useState } from "react";

const SearchDataContext = createContext(null);

export const useSearchData = () => useContext(SearchDataContext);

export const SearchDataProvider = ({ children }) => {
  const [searchData, setSearchData] = useState(null);

  return (
    <SearchDataContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchDataContext.Provider>
  );
};
