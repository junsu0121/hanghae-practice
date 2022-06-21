import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Reducer
const postSlice = createSlice({
  name: "post",
  initialState: {
    list: []
  },
  reducers: {
    changePost: (state, action) => {

    }
  },
});

export const { changePost } = postSlice.actions;
export default postSlice.reducer;