import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProdState {
  seller: string;
  key: number;
  src: any;
  category: string;
  name: string;
  price: string;
  description: string;
  isSame: boolean;
  beforeKey?: number;
}

const initialState: ProdState = {
  seller: "",
  key: 0,
  src: "",
  category: "",
  name: "",
  price: "",
  description: "",
  isSame: true,
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
    addBeforeKey(state, action: PayloadAction<number>) {
      state.beforeKey = action.payload;
    },
    prodInfoReset(state) {
      Object.assign(state, initialState);
    },
    editAllProdState(state, action: PayloadAction<ProdState>) {
      Object.assign(state, action.payload);
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
  addBeforeKey,
  prodInfoReset,
  editAllProdState,
} = prodInfoSlice.actions;

export const prodReducer = prodInfoSlice.reducer;
