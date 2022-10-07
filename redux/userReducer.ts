import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  users: object[];
}

const userInitState: User = {
  users: [],
};

const userSlice = createSlice({
  name: "userList",
  initialState: userInitState,
  reducers: {
    userList(state, action: PayloadAction<object>) {
      state.users?.push(action.payload);
    },
  },
});

export const { userList } = userSlice.actions;
export const userReducer = userSlice.reducer;
