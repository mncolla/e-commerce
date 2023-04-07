import fetcher from "../../../utils/fetch";

interface loginProps {
  email: string;
  password: string;
}

export const login = async (credentials: loginProps) => {
  const {
    data: { token },
  } = await fetcher.post(
    "http://localhost:3000/api/v1/auth/login",
    credentials
  );
};
