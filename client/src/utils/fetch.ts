import { useDispatch } from "react-redux";

import { login } from "../redux/states/auth.state";

class FetchInstance {

  const dispatch = useDispatch();

  static async get(url: string, headers = {}): Promise<any> {
    const token = this.getTokenFromLocalStorage();
    if (token) {
      headers = { ...headers, Authorization: `Bearer ${token}` };
    }
    const response = await fetch(url, {
      method: "GET",
      headers,
    });

    return await response.json();
  }

  static async post(url: string, data = {}, headers = {}): Promise<any> {
    const token = this.getTokenFromLocalStorage();
    if (token) {
      headers = { ...headers, Authorization: `Bearer ${token}` };
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  }

  static async put(url: string, data = {}, headers = {}) {
    const token = this.getTokenFromLocalStorage();
    if (token) {
      headers = { ...headers, Authorization: `Bearer ${token}` };
    }
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  }

  static async patch(url: string, data = {}, headers = {}): Promise<any> {
    const token = this.getTokenFromLocalStorage();
    if (token) {
      headers = { ...headers, Authorization: `Bearer ${token}` };
    }
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  }

  static async delete(url: string, headers = {}): Promise<any> {
    const token = this.getTokenFromLocalStorage();
    if (token) {
      headers = { ...headers, Authorization: `Bearer ${token}` };
    }
    const response = await fetch(url, {
      method: "DELETE",
      headers,
    });

    return await response.json();
  }

  static getTokenFromLocalStorage() {
    const tokenCookie = window.localStorage.getItem("token");
    return tokenCookie;
  }
}

export default FetchInstance;
