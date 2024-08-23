import ActionReducer from "./ActionReducer/ActionReducer";
import { configureStore } from "@reduxjs/toolkit";
import KeepReducer from "./ActionReducer/keep";

export default configureStore({
  reducer: {
    counter: ActionReducer,
    keep: KeepReducer,
  },
});
