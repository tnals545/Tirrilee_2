import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProdState {
  key: number;
  src: string;
  category: string;
  name: string;
  price: string;
  description: string;
}

export interface ProdListState extends Array<ProdState> {}

const userProdInitialState: ProdState = {
  key: 0,
  src: "",
  category: "",
  name: "",
  price: "",
  description: "",
};

const prodInfoSlice = createSlice({
  name: "prod_info",
  initialState: userProdInitialState,
  reducers: {
    prodKey(state, action: PayloadAction<number>) {
      state.key = action.payload;
    },
    prodSrc(state, action: PayloadAction<any>) {
      state.src = action.payload;
    },
    prodCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    prodName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    prodPrice(state, action: PayloadAction<string>) {
      state.price = action.payload;
    },
    prodDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
  },
});

export const {
  prodKey,
  prodSrc,
  prodCategory,
  prodName,
  prodPrice,
  prodDescription,
} = prodInfoSlice.actions;

export const prodReducer = prodInfoSlice.reducer;
