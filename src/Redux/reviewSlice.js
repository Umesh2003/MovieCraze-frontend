import { createSlice } from "@reduxjs/toolkit";
import { ADD_REVIEW, GET_REVIEWS } from "../Constants/urls";
import { displayToast } from "./toastSlice";

const initialState = {
  reviews: [],
  loading: false,
};

export const slice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setReviews: (state, action) => {
      state.reviews = [...action.payload];
    },
    setReview: (state, action) => {
      state.reviews = [...state.reviews, action.payload];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setReviews, setReview, setLoading } = slice.actions;

export const addReview = (reviewData) => async (dispatch) => {
  dispatch(setLoading(true));
  console.log(reviewData);
  try {
    const res = await window.fetch(`${ADD_REVIEW}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    });
    const data = await res.json();

    if (res.status === 201) {
      dispatch(setReview(reviewData));
      dispatch(displayToast("Sucessfully posted the reveiw"));
    } else {
      dispatch(displayToast("Some error occured"));
    }
  } catch (err) {
    console.error(err);
  }
  dispatch(setLoading(false));
};

export const getReviews = (movie_id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await window.fetch(`${GET_REVIEWS}/${movie_id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);

    if (res.status == 201) {
      dispatch(setReviews(data.reviews));
      console.log(data.reviews);
    }
  } catch (err) {
    console.error(err);
  }
  dispatch(setLoading(false));
};

export const selectReviews = (state) => state.reviews.reviews;

export const selectLoading = (state) => state.reviews.loading;

export default slice.reducer;
