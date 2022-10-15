import { configureStore } from "@reduxjs/toolkit";

import { userInfoReducer } from "redux/userInfoReducer";
import { prodReducer } from "redux/prodReducer";
import { userReducer } from "redux/userReducer";

const store = configureStore({
  reducer: {
    users: userReducer,
    userInfo: userInfoReducer,
    prods: prodReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
