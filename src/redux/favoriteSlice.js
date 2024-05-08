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
      state.movies.push(action.payload);
    },
    removeMovie: (state) => {
      state.movies = [];
    },
    isFavVisible: (state, action) => {
      state.showFav = action.payload;
    },
  },
});

export const { addMovie, isFavVisible, removeMovie } = favoriteSlice.actions;

export default favoriteSlice.reducer;
