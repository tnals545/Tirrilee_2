import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProdState } from "./prodReducer";

export interface EtcState {
  categories: string[];
  isDelete: boolean;
  recentProd: ProdState;
}

const initialState: EtcState = {
  categories: ["전체", "에코백", "티셔츠", "기타상품"],
  isDelete: false,
  recentProd: {
    seller: "",
    key: 0,
    src: "",
    category: "",
    name: "",
    price: "",
    description: "",
    isSame: true,
  },
};

const etcSlice = createSlice({
  name: "etc",
  initialState,
  reducers: {
    addCategory(state, action: PayloadAction<string>) {
      state.categories.push(action.payload);
    },
    deleteCategory(state, action: PayloadAction<string>) {
      const newCategories = state.categories.filter((category) => {
        return category !== action.payload;
      });
      state.categories = newCategories;
    },
    isDelete(state, action: PayloadAction<boolean>) {
      state.isDelete = action.payload;
    },
    updateRecentProd(state, action: PayloadAction<ProdState>) {
      Object.assign(state.recentProd, action.payload);
    },
  },
});

export const { addCategory, deleteCategory, isDelete, updateRecentProd } =
  etcSlice.actions;
export const etcReducer = etcSlice.reducer;
