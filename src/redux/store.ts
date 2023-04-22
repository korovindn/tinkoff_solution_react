import { configureStore } from "@reduxjs/toolkit";
import { helloReducer } from "../components/HelloWorld/redux/helloReducer";

export const store = configureStore({
  reducer: {
    hello: helloReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
