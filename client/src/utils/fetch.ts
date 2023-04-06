class FetchInstance {
  static async get(url: string, headers = {}): Promise<any> {
    const token = this.getTokenFromCookies();
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
    const token = this.getTokenFromCookies();
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
    const token = this.getTokenFromCookies();
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
    const token = this.getTokenFromCookies();
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
    const token = this.getTokenFromCookies();
    if (token) {
      headers = { ...headers, Authorization: `Bearer ${token}` };
    }
    const response = await fetch(url, {
      method: "DELETE",
      headers,
    });

    return await response.json();
  }

  static getTokenFromCookies() {
    const tokenCookie = document.cookie
      .split(";")
      .find((cookie) => cookie.includes("token="));
    return tokenCookie ? tokenCookie.split("=")[1] : null;
  }
}

export default FetchInstance;
