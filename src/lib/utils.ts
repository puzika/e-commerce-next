import type { Request, RequestError } from "./definitions"

const api = {
  get: async <TResponse>(request: Request) => {
    const { url, options, errorDescription } = request;

    try {
      const response = await fetch(url, options);

      if (response.ok) {
        const data = await response.json();
        return data as TResponse;
      }

      const error: RequestError = {
        title: `${response.status}`,
        message: response.statusText,
        description: errorDescription,
      }

      throw new Error(JSON.stringify(error));
    } catch (error) {
      console.log("Fetch (GET) error:", error);
      throw error;
    }
  },

  post: async <TBody>(request: Request, body: TBody) => {
    const { url, options, errorDescription } = request;

    try {
      const response = await fetch(url, { method: 'POST', body: JSON.stringify(body), ...options});
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Fetch (POST) error: ", error);
      throw error;
    }
  }
}

export default api;