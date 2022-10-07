import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ProdState {
  info: object;
}

const prodInitState: ProdState = {
  info: {},
};

const prodInfoSlice = createSlice({
  name: "prod info",
  initialState: prodInitState,
  reducers: {
    prodInfo(state, action: PayloadAction<object>) {
      state.info = action.payload;
    },
  },
});

export const { prodInfo } = prodInfoSlice.actions;
export const prodReducer = prodInfoSlice.reducer;
