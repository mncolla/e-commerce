import axiosInstance from "../../../utils/axiosInstance";

export const login = async (email: string, password: string) => {
  const res = await axiosInstance.post("/auth/login", {
    email,
    password,
  });

  const {
    data: { token, user },
  } = res.data;

  const session = { ...user, token };

  return { session };
};
