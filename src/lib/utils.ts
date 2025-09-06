import type { FetchOptions } from "./definitions"

const api = {
  get: async <TResponse>(url: string, options?: FetchOptions) => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data as TResponse;
    } catch (error) {
      console.log("Fetch (GET) error:", error);
      throw new Error("Failed to retrieve data");
    }
  },

  post: async <TBody>(url: string, body: TBody, options?: FetchOptions) => {
    try {
      const response = await fetch(url, { method: 'POST', body: JSON.stringify(body), ...options});
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Fetch (POST) error: ", error);
      throw new Error("Failed to post data");
    }
  }
}

export default api;