import { configureStore } from "@reduxjs/toolkit";

import { userReducer, prodReducer } from "redux/reducers";

const store = configureStore({ reducer: { userReducer, prodReducer } });

export const dispatch = store.dispatch;
export default store;
