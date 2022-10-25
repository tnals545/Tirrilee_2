import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserInfoState {
  email: string;
  password: string;
  isLogin: boolean;
  nickname: string;
  profileImg: any;
}

const initialState: UserInfoState = {
  email: "",
  password: "",
  isLogin: false,
  nickname: "",
  profileImg: "/profile.png",
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
    editProfileImg(state, action: PayloadAction<any>) {
      state.profileImg = action.payload;
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
  editProfileImg,
  userAlreadyId,
  userInfoReset,
} = userInfoSlice.actions;

export const userReducer = userInfoSlice.reducer;
