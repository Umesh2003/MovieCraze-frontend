import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",
  initialState: {
    msg: "",
    type: "error",
  },
  reducers: {
    setMsg: (state, action) => {
      state.msg = action.payload;
    },
    deleteMsg: (state) => {
      state.msg = "";
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});

const { setMsg, deleteMsg, setType } = toastSlice.actions;

export const displayToast = (text, type) => (dispatch) => {
  dispatch(setMsg(text));
  if (type) dispatch(setType(type));
};

export const removeToast = () => (dispatch) => dispatch(deleteMsg());

export const selectToastMsg = (state) => state.toast.msg;

export default toastSlice.reducer;
