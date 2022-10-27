import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "redux/userReducer";
import { prodReducer } from "redux/prodReducer";
import { dataReducer } from "redux/dataReducer";
import { etcReducer } from "redux/etcReducer";

const store = configureStore({
  reducer: {
    data: dataReducer,
    userInfo: userReducer,
    prodInfo: prodReducer,
    etc: etcReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
