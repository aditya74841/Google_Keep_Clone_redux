import { configureStore } from "@reduxjs/toolkit";
import KeepReducer from "./ActionReducer/keep";

export default configureStore({
  reducer: {
   
    keep: KeepReducer,
  },
});
