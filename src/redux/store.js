import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterSlice from "./slices/counterSlice";
import { redApi } from "../services/getDataXor";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { localApi } from "../services/getBalance";

export const store = configureStore({
  reducer: {
    counterSlice,
    [redApi.reducerPath]: redApi.reducer,
    [localApi.reducerPath]: localApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(redApi.middleware, localApi.middleware)
})

setupListeners(store.dispatch)