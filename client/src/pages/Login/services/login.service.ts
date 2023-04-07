import { useDispatch } from "react-redux";
import axiosInstance from "../../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../redux/states/user.state";

export const login = async (email: string, password: string) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const res = await axiosInstance.post("/auth/login", {
    email,
    password,
  });

  const {
    data: { token, user },
  } = res.data;

  dispatch(setUser(user));
  localStorage.setItem("token", token);
  navigate("/", { replace: true });

  return { token, user };
};
