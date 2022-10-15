import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserInfoState } from "./userInfoReducer";
import { ProdListState } from "./prodReducer";

export interface User<T> {
  user: T;
}

export interface UserState extends User<UserInfoState<ProdListState>> {}
export interface UserListState
  extends Array<User<UserInfoState<ProdListState>>> {}

const initialState: UserListState = [
  {
    user: {
      email: "",
      password: "",
      isLogin: false,
      nickname: "티릴리",
      uploadlist: [
        {
          key: 0,
          src: "",
          category: "",
          name: "",
          price: "",
          description: "",
        },
      ],
    },
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdd(state) {
      state.push(initialState[0]);
    },
    userDataAssign(state, action: PayloadAction<UserState>) {
      state[state.length - 1] = action.payload;
    },
  },
});

export const { userAdd, userDataAssign } = userSlice.actions;
export const userReducer = userSlice.reducer;
