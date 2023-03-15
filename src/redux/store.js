import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterSlice from "./slices/counterSlice";
import { redApi } from "../services/getDataXor";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    counterSlice,
    [redApi.reducerPath]: redApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(redApi.middleware)
})

setupListeners(store.dispatch)