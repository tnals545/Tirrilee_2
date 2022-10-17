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
  isSame: boolean;
}

const initialState: ProdState = {
  seller: "",
  key: 0,
  src: "",
  category: "",
  name: "",
  price: "",
  description: "",
  isSame: false,
};

const prodInfoSlice = createSlice({
  name: "prodInfo",
  initialState,
  reducers: {
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
    addSeller(state, action: PayloadAction<string>) {
      state.seller = action.payload;
    },
    addDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
    isSameSeller(state, action: PayloadAction<boolean>) {
      state.isSame = action.payload;
    },
    prodInfoReset(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  addKey,
  addSrc,
  addCategory,
  addName,
  addPrice,
  addSeller,
  addDescription,
  isSameSeller,
  prodInfoReset,
} = prodInfoSlice.actions;

export const prodReducer = prodInfoSlice.reducer;
