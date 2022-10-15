import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserInfoState } from "./userInfoReducer";
import { ProdListState } from "./prodReducer";

export interface EmailList {
  emailList: [];
}

const initialState: EmailList = { emailList: [] };

const emailListSlice = createSlice({
  name: "emailList",
  initialState,
  reducers: {
    addEmail(state, action: PayloadAction<string>) {
      state.push(action.payload);
    },
  },
});

export const { addEmail } = emailListSlice.actions;
export const emailListReducer = emailListSlice.reducer;
