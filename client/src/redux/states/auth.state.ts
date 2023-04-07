import { createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage, persistLocalStorage } from "../../utils";

export const EmptyAuthState: any = {
  token: "",
};

export const AuthKey = "token";

export const authSlice = createSlice({
  name: "token",
  initialState: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token") as string)
    : EmptyAuthState,
  reducers: {
    login: (state, action) => {
      persistLocalStorage(AuthKey, action.payload);
      return action.payload;
    },
    logout: (state, action) => {
      clearLocalStorage(AuthKey);
      return EmptyAuthState;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
