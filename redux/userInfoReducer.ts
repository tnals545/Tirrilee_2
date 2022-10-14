import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProdListState, ProdState } from "./prodReducer";

export interface UserInfoState<T> {
  email: string | undefined;
  password: string | undefined;
  isLogin: boolean;
  nickname: string;
  uploadlist: T;
}

const userInfoInitialState: UserInfoState<ProdListState> = {
  email: "",
  password: "",
  isLogin: false,
  nickname: "티릴리",
  uploadlist: [],
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: userInfoInitialState,
  reducers: {
    userEmail(state, action: PayloadAction<string | undefined>) {
      state.email = action.payload;
    },
    userPassword(state, action: PayloadAction<string | undefined>) {
      state.password = action.payload;
    },
    userIsLogin(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
    userNickName(state, action: PayloadAction<string>) {
      state.nickname = action.payload;
    },
    userUploadList(state, action: PayloadAction<ProdState>) {
      state.uploadlist?.push(action.payload);
    },
    reset(state) {
      Object.assign(state, userInfoInitialState);
    },
  },
});

export const {
  userEmail,
  userPassword,
  userIsLogin,
  userNickName,
  userUploadList,
  reset,
} = userInfoSlice.actions;

export const userInfoReducer = userInfoSlice.reducer;
