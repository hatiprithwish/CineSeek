import MovieCard from "./MovieCard";

const RowContainer = ({ flag, data, isLoading }) => {
  return (
    <div
      className={`w-full flex items-stretch gap-3  my-12 scroll-smooth  ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {isLoading ? (
        <div className="w-full flex flex-col items-center justify-center">
          <img src="/NotFound.svg" className="h-340" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Please wait...
          </p>
        </div>
      ) : data && data.length > 0 ? (
        data.map((item) => <MovieCard movie={item} key={item.id} />)
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src="/NotFound.svg" className="h-340" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
