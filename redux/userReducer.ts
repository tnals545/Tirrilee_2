import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserInfoState {
  email: string;
  password: string;
  isLogin: boolean;
  nickname: string;
}

const initialState: UserInfoState = {
  email: "",
  password: "",
  isLogin: false,
  nickname: "",
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    addPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    isLogin(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
    addNickName(state, action: PayloadAction<string>) {
      state.nickname = action.payload;
    },
    userAlreadyId(state, action: PayloadAction<UserInfoState>) {
      state = action.payload;
    },
    userInfoReset(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  addEmail,
  addPassword,
  isLogin,
  addNickName,
  userAlreadyId,
  userInfoReset,
} = userInfoSlice.actions;

export const userReducer = userInfoSlice.reducer;
