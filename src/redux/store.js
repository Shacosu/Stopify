import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterSlice from "./slices/counterSlice";
import { pokemonApi } from "../services/pokemon";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    counterSlice,
    [pokemonApi.reducerPath]: pokemonApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware)
})

setupListeners(store.dispatch)