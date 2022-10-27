import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface EtcState {
  categories: string[];
  isDelete: boolean;
  alertClass: string;
}

const initialState: EtcState = {
  categories: ["전체", "에코백", "티셔츠", "기타물품"],
  isDelete: false,
  alertClass: "delete-alert",
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
    editAlertClass(state, action: PayloadAction<string>) {
      state.alertClass = action.payload;
    },
  },
});

export const { addCategory, deleteCategory, isDelete, editAlertClass } =
  etcSlice.actions;
export const etcReducer = etcSlice.reducer;
