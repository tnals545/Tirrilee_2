import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserInfoState } from "./userReducer";
import { ProdState } from "./prodReducer";

export interface DataState<T, F> {
  users: T;
  products: F;
  categories: string[];
}

export interface UserArray extends Array<UserInfoState> {}
export interface ProdArray extends Array<ProdState> {}

const initialState: DataState<UserArray, ProdArray> = {
  users: [],
  products: [],
  categories: ["전체", "에코백", "티셔츠", "기타물품"],
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
    delProd(state, action: PayloadAction<number>) {
      state.products.forEach((prod, index) => {
        if (prod.key === action.payload) {
          state.products.splice(index);
        }
      });
    },
    editUser(state, action: PayloadAction<UserInfoState>) {
      state.users.forEach((user, index) => {
        if (user.email === action.payload.email) {
          state.users[index] = action.payload;
        }
      });
    },
    editProduct(state, action: PayloadAction<ProdState>) {
      state.products.forEach((prod, index) => {
        if (prod.key === action.payload.key) {
          state.products[index] = action.payload;
        }
      });
    },
    allIsSameFalse(state) {
      state.products.forEach((prod) => {
        prod.isSame = false;
      });
    },
    findIsSameTrue(state, action: PayloadAction<string>) {
      state.products.forEach((prod, index) => {
        if (prod.seller === action.payload) {
          state.products[index].isSame = true;
        }
      });
    },
  },
});

export const {
  addUser,
  addProd,
  delProd,
  editUser,
  editProduct,
  allIsSameFalse,
  findIsSameTrue,
} = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
