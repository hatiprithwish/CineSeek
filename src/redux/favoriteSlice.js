import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  showFav: false,
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const existingMovie = state.movies.find(
        (movie) => movie.id === action.payload.id
      );
      if (!existingMovie) {
        state.movies.push(action.payload);
      }
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
    clearMovies: (state) => {
      state.movies = [];
    },
    isFavVisible: (state, action) => {
      state.showFav = action.payload;
    },
  },
});

export const { addMovie, isFavVisible, removeMovie, clearMovies } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
