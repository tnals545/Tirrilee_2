import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ProdState {
  seller: string;
  key: number;
  src: string;
  category: string;
  name: string;
  price: string;
  description: string;
}
const prodInitState: ProdState = {
  seller: "",
  key: 0,
  src: "",
  category: "",
  name: "",
  price: "",
  description: "",
};

const prodInfoSlice = createSlice({
  name: "prod_info",
  initialState: prodInitState,
  reducers: {
    prodSeller(state, action: PayloadAction<string>) {
      state.seller = action.payload;
    },
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
  prodSeller,
  prodKey,
  prodSrc,
  prodCategory,
  prodName,
  prodPrice,
  prodDescription,
} = prodInfoSlice.actions;
export const prodReducer = prodInfoSlice.reducer;
