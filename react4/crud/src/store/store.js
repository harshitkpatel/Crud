import { configureStore } from "@reduxjs/toolkit";

import submitSlice from "./slice/createSlice";

export const store = configureStore({
  reducer: {
    submit: submitSlice,
  },
});
