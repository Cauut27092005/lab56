// counterSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    multiply: (state) => {
      state.count = state.count * state.count;  // Square the count
    },
    reset: (state) => {
      state.count = 0;  // Reset to 0
    }
  }
});

export const { increment, decrement, multiply, reset } = counterSlice.actions;

export default counterSlice.reducer;
