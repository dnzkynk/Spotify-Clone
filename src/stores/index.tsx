import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./Player";

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});
