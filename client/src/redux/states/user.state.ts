import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models";
import {
  getLocalStorage,
  setLocalStorage,
  clearLocalStorage,
} from "../../utils";

export const EmptyUserState: User = {
  username: "",
  email: "",
  token: "",
};

export const UserKey = "user";

export const userSlice = createSlice({
  name: "user",
  initialState: getLocalStorage(UserKey)
    ? JSON.parse(getLocalStorage(UserKey) as string)
    : EmptyUserState,
  reducers: {
    setUser: (state, action) => {
      setLocalStorage(UserKey, action.payload);
      return action.payload;
    },
    clearUser: () => {
      clearLocalStorage(UserKey);
      return EmptyUserState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
