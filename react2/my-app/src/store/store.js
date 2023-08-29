import { configureStore } from "@reduxjs/toolkit";
// import {submitSlice} from './feture/slices'
import submitSlice from "./fetures/postSlices";

export const store = configureStore({
  reducer: {
    submit: submitSlice,
  },
});
