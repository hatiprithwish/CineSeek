import { useEffect, useState } from "react";
import MovieGrid from "../MovieGrid/MovieGrid";
import { useSearchData } from "../../store/SearchDataProvider";

const HeroSection = () => {
  const { searchData } = useSearchData();

  // console.log(data);

  return (
    <div>
      {searchData?.results.length > 0 ? (
        <MovieGrid data={searchData} isLoading={isLoading} />
      ) : (
        <MovieGrid data={data} isLoading={isLoading} />
      )}
    </div>
  );
};

export default HeroSection;
