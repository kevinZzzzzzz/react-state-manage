import { configureStore } from "@reduxjs/toolkit";
import HomePageReducer from "./slice/HomePageSlice";

const store = configureStore({
  reducer: {
    HomePage: HomePageReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store