import { createSlice } from "@reduxjs/toolkit";
import {
  ADD_TO_FAV,
  GET_FAV,
  GET_MOVIES_N,
  GET_MOVIE_BY_ID,
  GET_SEARCH,
} from "../Constants/urls";
import { displayToast } from "./toastSlice";

const initialState = {
  bollywoodMovies: [],
  hollywoodMovies: [],
  movie: null,
  movieSuggestions: [],
  favourites: [],
  loading: false,
};

export const slice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setBollywoodMovies: (state, action) => {
      state.bollywoodMovies = [...action.payload];
    },
    setHollywoodMovies: (state, action) => {
      state.hollywoodMovies = [...action.payload];
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    setSuggestions: (state, action) => {
      console.log(action.payload);
      state.movieSuggestions = [...action.payload];
    },
    setFav: (state, action) => {
      state.favourites = [...action.payload];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setBollywoodMovies,
  setHollywoodMovies,
  setSuggestions,
  setMovie,
  setFav,
  setLoading,
} = slice.actions;

export const clearSearchResults = () => async (dispatch) => {
  dispatch(setSuggestions([]));
};

export const getSearchResults = (searchTerm) => async (dispatch) => {
  console.log("hello world");
  try {
    const response = await window.fetch(`${GET_SEARCH}/${searchTerm}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.status === 201) {
      console.log(data.movies);
      dispatch(setSuggestions(data.movies));
    }
  } catch (err) {
    console.error(err);
  }
};

export const getNMovies = () => async (dispatch) => {
  dispatch(setLoading(true));
  console.log("hello world");
  try {
    const response1Promise = window.fetch(`${GET_MOVIES_N}/Bollywood`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response2Promise = window.fetch(`${GET_MOVIES_N}/Hollywood`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const [response1, response2] = await Promise.all([
      response1Promise,
      response2Promise,
    ]);
    if (response1.status === 201) {
      const bollywood = await response1.json();
      dispatch(setBollywoodMovies(bollywood));
    }
    if (response2.status === 201) {
      const hollywood = await response2.json();
      dispatch(setHollywoodMovies(hollywood));
    }
  } catch (err) {
    console.error(err);
  }
  dispatch(setLoading(false));
};

export const getMovieById = (movieId) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await window.fetch(`${GET_MOVIE_BY_ID}/${movieId}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      const movie = await response.json();
      dispatch(setMovie(movie));
    }
  } catch (err) {
    console.error(err);
  }
  dispatch(setLoading(false));
};

export const addToFavourite = (userId, movieId) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await window.fetch(ADD_TO_FAV, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie_id: movieId,
        user_id: userId,
      }),
    });
    if (response.status === 201) {
      dispatch(displayToast("Added To Favourites"));
    }
  } catch (err) {
    console.error(err);
  }
  dispatch(setLoading(false));
};

export const getFavourites = (userId) => async (dispatch) => {
  console.log(`${GET_FAV}/${userId}`);
  dispatch(setLoading(true));
  try {
    const response = await window.fetch(`${GET_FAV}/${userId}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      const data = await response.json();
      dispatch(setFav(data));
    }
  } catch (err) {
    console.error(err);
  }
  dispatch(setLoading(false));
};

export const selectBollywoodMovies = (state) => state.movies.bollywoodMovies;

export const selectHollywoodMovies = (state) => state.movies.hollywoodMovies;

export const selectMovie = (state) => state.movies.movie;

export const selectLoading = (state) => state.movies.loading;

export const selectFavs = (state) => state.movies.favourites;

export const selectSuggestions = (state) => state.movies.movieSuggestions;

export default slice.reducer;
