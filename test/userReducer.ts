import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserInfoState {
  email: string | undefined;
  password: string | undefined;
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
    userAlreadyId(state, action: PayloadAction<UserInfoState>) {
      state = action.payload;
    },
    userInfoReset(state) {
      Object.assign(state, initialState);
    },
  },
});
