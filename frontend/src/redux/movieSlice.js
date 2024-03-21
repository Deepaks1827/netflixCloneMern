import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: null,
    popularMovie: null,
    topRatedMovie: null,
    upcomingMovie: null,
    toggle: false,
    trailerMovie: null,
    open: false,
    id:"",
  },
  reducers: {
    //actions

    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    getPopularMovies: (state, action) => {
      state.popularMovie = action.payload;
    },
    getTopRatedMovies: (state, action) => {
      state.topRatedMovie = action.payload;
    },
    getUpcomingMovies: (state, action) => {
      state.upcomingMovie = action.payload;
    },
    setToggle: (state) => {
      state.toggle = !state.toggle;
    },
    getTrailerMovies: (state, action) => {
      state.trailerMovie = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setId: (state,action) => {
      state.open = action.payload;
    }
  },
});
export const {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  setToggle,
  getTrailerMovies,
  setOpen,
  setId,
} = movieSlice.actions;
export default movieSlice.reducer;
