import { configureStore } from "@reduxjs/toolkit";
import { User } from "../models";
import userSliceReducer from "./states/user.state";
import authSliceReducer from "./states/auth.state";

export interface AppStore {
  user: User;
  auth: any;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSliceReducer,
    auth: authSliceReducer,
  },
});
