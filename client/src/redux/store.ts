import { configureStore } from "@reduxjs/toolkit";
import { User } from "../models";
import userSliceReducer from "./states/user.state";

export interface AppStore {
  user: User;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSliceReducer,
  },
});
