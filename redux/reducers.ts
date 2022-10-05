import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string | undefined;
  password: string | undefined;
  nickname: string | undefined;
  uploadlist: any[] | undefined;
}

interface ProdState {
  info: object;
}

const userInitState: UserState = {
  email: "",
  password: "",
  nickname: "",
  uploadlist: [],
};

const prodInitState: ProdState = {
  info: {},
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitState,
  reducers: {
    userEmail(state, action: PayloadAction<string | undefined>) {
      state.email = action.payload;
    },
    userPassword(state, action: PayloadAction<string | undefined>) {
      state.password = action.payload;
    },
    userNickname(state, action: PayloadAction<string | undefined>) {
      state.nickname = action.payload;
    },
    userUploadList(state, action: PayloadAction<object>) {
      state.uploadlist?.push(action.payload);
    },
  },
});

const prodInfoSlice = createSlice({
  name: "prod info",
  initialState: prodInitState,
  reducers: {
    prodInfo(state, action: PayloadAction<object>) {
      state.info = action.payload;
    },
  },
});

export const { userEmail, userPassword, userNickname, userUploadList } =
  userSlice.actions;
export const { prodInfo } = prodInfoSlice.actions;
export const userReducer = userSlice.reducer;
export const prodReducer = prodInfoSlice.reducer;
