import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001"
});

export const getDataDB = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/post");
      dispatch(setData(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addDataDB = (data) => {
  return async (dispatch) => {
    try {
      const response = await instance.post("/post", data);
      dispatch(addData(response.data));
    } catch (err) {
      console.log(err);
    }
  }
}

//Reducer
const postSlice = createSlice({
  name: "post",
  initialState: {
    list: []
  },
  reducers: {
    setData: (state, action) => {
      state.list = action.payload;
    },
    addData: (state, action) => {
      state.list.push(action.payload);
    }
  },
});

export const { setData, addData } = postSlice.actions;
export default postSlice.reducer;