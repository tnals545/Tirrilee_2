import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DataState {
  users: object[];
  products: object[];
}

const initialState: DataState = {
  users: [],
  products: [],
};

const dataSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<object>) {
      state.users.push(action.payload);
    },
    addProd(state, action: PayloadAction<object>) {
      state.users.push(action.payload);
    },
  },
});

export const { addUser, addProd } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
