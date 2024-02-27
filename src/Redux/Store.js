import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import ToastReducer from "./toastSlice";
import moviesReducer from "./movieSlice";
import reviewsReducer from "./reviewSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    toast: ToastReducer,
    movies: moviesReducer,
    reviews: reviewsReducer,
  },
});

export const RootState = store.getState();
export const AppDispatch = store.dispatch;

export default store;
