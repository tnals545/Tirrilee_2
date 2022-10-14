import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserInfoState } from "./userInfoReducer";
import { ProdListState } from "./prodReducer";

export interface User<T> {
  [user: string]: T;
}

export interface UserListState<T> extends Array<User<T>> {}

const userInitialState: UserListState<UserInfoState<ProdListState>> = [];

const userSlice = createSlice({
  name: "users",
  initialState: userInitialState,
  reducers: {
    userAdd(state, action: PayloadAction<User<UserInfoState<ProdListState>>>) {
      state.push(action.payload);
    },
  },
});

export const { userAdd } = userSlice.actions;
export const userReducer = userSlice.reducer;
