import { configureStore } from "@reduxjs/toolkit";

import { userReducer, prodReducer } from "redux/reducers";

const store = configureStore({
  reducer: { users: userReducer, prods: prodReducer },
});

export const dispatch = store.dispatch;
export default store;
