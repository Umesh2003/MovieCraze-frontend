import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import ToastReducer from "./toastSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    toast: ToastReducer,
  },
});

export const RootState = store.getState();
export const AppDispatch = store.dispatch;

export default store;
