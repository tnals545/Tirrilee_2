import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string | undefined;
  password: string | undefined;
}

interface ProdState {
  seller: string;
  src: string;
  category: string;
  name: string;
  price: string;
  description: string;
}

const userInitState = { email: "", password: "" } as UserState;

const prodInitState = {
  seller: "",
  src: "",
  category: "",
  name: "",
  price: "",
  description: "",
} as ProdState;

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
  },
});

const prodSlice = createSlice({
  name: "prod info",
  initialState: prodInitState,
  reducers: {
    prodSeller() {},
    prodSrc() {},
    prodCategory() {},
    prodName() {},
    prodPrice() {},
    prodDescription() {},
  },
});

export const { userEmail, userPassword } = userSlice.actions;
export default userSlice.reducer;
