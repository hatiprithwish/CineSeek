const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDNhYjZiYmNhMWVmYzc3NmM2MDhlNjc5OWQ5MjhhNSIsInN1YiI6IjY2MzViYTczNjNlNmZiMDEyNjZlOTcwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H1a4nZFrPsxyEJPDraRgDX8CkYFJeqMj476iImJnskg",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
