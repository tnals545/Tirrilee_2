import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserInfoState } from "./userReducer";
import { ProdState } from "./prodReducer";

export interface DataState<T, F, J> {
  users: T;
  products: F;
  nowProdInfo: J;
}

export interface UserArray extends Array<UserInfoState> {}
export interface ProdArray extends Array<ProdState> {}

const initialState: DataState<UserArray, ProdArray, ProdState> = {
  users: [],
  products: [],
  nowProdInfo: {
    seller: "",
    key: 0,
    src: "",
    category: "",
    name: "",
    price: "",
    description: "",
    isSame: false,
  },
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
    editUser(state, action: PayloadAction<UserInfoState>) {
      state.users.forEach((user, index) => {
        if (user.email === action.payload.email) {
          state.users[index] = action.payload;
        }
      });
    },
    addNowProdInfo(state, action: PayloadAction<ProdState>) {
      state.nowProdInfo = action.payload;
    },
  },
});

export const { addUser, addProd, editUser, addNowProdInfo } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
