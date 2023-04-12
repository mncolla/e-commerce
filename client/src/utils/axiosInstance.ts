import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.SERVER_URL || "http://localhost:3000/api/v1/",
  timeout: 5000, // tiempo máximo de espera para una respuesta
});

axiosInstance.interceptors.request.use(
  (config) => {
    const session = localStorage.getItem("user");
    if (session) {
      const { token } = JSON.parse(session);
      config.headers.authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (success) => success,
  ({
    response: {
      data: { code },
    },
  }) => {
    if (code === "token-expired") {
      localStorage.removeItem("user");
      window.location.href = "/";
    }
  }
);

export default axiosInstance;
