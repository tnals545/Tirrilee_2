import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProdState {
  seller: string;
  key: number;
  src: string;
  category: string;
  name: string;
  price: string;
  description: string;
}

const initialState: ProdState = {
  seller: "",
  key: 0,
  src: "",
  category: "",
  name: "",
  price: "",
  description: "",
};

const prodInfoSlice = createSlice({
  name: "prodInfo",
  initialState,
  reducers: {
    addSeller(state, action: PayloadAction<string>) {
      state.seller = action.payload;
    },
    addKey(state, action: PayloadAction<number>) {
      state.key = action.payload;
    },
    addSrc(state, action: PayloadAction<any>) {
      state.src = action.payload;
    },
    addCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    addName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    addPrice(state, action: PayloadAction<string>) {
      state.price = action.payload;
    },
    addDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
    prodInfoReset(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  addSeller,
  addKey,
  addSrc,
  addCategory,
  addName,
  addPrice,
  addDescription,
  prodInfoReset,
} = prodInfoSlice.actions;

export const prodReducer = prodInfoSlice.reducer;
