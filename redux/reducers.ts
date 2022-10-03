import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string | undefined;
  password: string | undefined;
}

const initialState = { email: "", password: "" } as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userEmail(state, action: PayloadAction<string | undefined>) {
      state.email = action.payload;
    },
    userPassword(state, action: PayloadAction<string | undefined>) {
      state.password = action.payload;
    },
  },
});

export const { userEmail, userPassword } = userSlice.actions;
export default userSlice.reducer;
