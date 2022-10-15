import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserInfoState } from "./userReducer";
import { ProdState } from "./prodReducer";

export interface DataState<T, F> {
  users: T;
  products: F;
}

export interface UserArray extends Array<UserInfoState> {}
export interface ProdArray extends Array<ProdState> {}

const initialState: DataState<UserArray, ProdArray> = {
  users: [],
  products: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<UserInfoState>) {
      state.users.push(action.payload);
    },
    addProd(state, action: PayloadAction<ProdState>) {
      state.products.push(action.payload);
    },
  },
});

export const { addUser, addProd } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
