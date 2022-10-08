import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserInfoState {
  email: string | undefined;
  password: string | undefined;
  isLogin: boolean;
  nickname: string;
  uploadlist: object[] | undefined;
}

const userInfoInitState: UserInfoState = {
  email: "",
  password: "",
  isLogin: false,
  nickname: "티릴리",
  uploadlist: [],
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: userInfoInitState,
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
    userUploadList(state, action: PayloadAction<object>) {
      state.uploadlist?.push(action.payload);
    },
  },
});

export const {
  userEmail,
  userPassword,
  userIsLogin,
  userNickName,
  userUploadList,
} = userInfoSlice.actions;
export const userInfoReducer = userInfoSlice.reducer;
