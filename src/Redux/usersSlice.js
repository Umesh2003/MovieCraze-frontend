import { createSlice } from "@reduxjs/toolkit";
import { LOGIN, REGISTER } from "../Constants/urls";
import { displayToast } from "./toastSlice";

const initialState = {
  user: null,
  loading: false,
};

export const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setUser, setLoading } = slice.actions;

export const login = (userData, cb) => async (dispatch) => {
  console.log(userData);
  dispatch(setLoading(true));
  try {
    const response = await window.fetch(LOGIN, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (response.status === 201) {
      console.log(data);
      const user = {
        user_id: data.user._id,
        userName: data.user.userName,
        email: data.user.email,
      };
      dispatch(setUser(user));
      if (cb) cb();
      dispatch(displayToast("Logged In"));
    }
  } catch (err) {
    console.error(err);
  }
  dispatch(setLoading(false));
};

export const register = (userData, cb) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await window.fetch(REGISTER, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (response.status === 201 && data.user_id !== "") {
      if (cb) cb();
      dispatch(displayToast("Registered User"));
    }
  } catch (err) {
    console.error(err);
  }
  dispatch(setLoading(false));
};

export const selectUser = (state) => state.users.user;

export const selectLoading = (state) => state.users.loading;

export default slice.reducer;
