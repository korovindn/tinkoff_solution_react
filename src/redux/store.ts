import { configureStore } from "@reduxjs/toolkit";
import { helloReducer } from "../components/HelloWorld/redux/helloReducer";
import { historyReducer } from "../components/History/redux/historyReducer";

export const store = configureStore({
  reducer: {
    hello: helloReducer,
    history: historyReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
