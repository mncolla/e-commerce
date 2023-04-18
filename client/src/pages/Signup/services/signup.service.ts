import axiosInstance from "../../../utils/axiosInstance";

export const signup = async (
  email: string,
  username: string,
  password: string
) => {
  const res = await axiosInstance.post("/auth/signup", {
    email,
    username,
    password,
  });

  return res;
};
