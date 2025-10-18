import type { Request, RequestError } from "./definitions"

const DEFAULT_TIMEOUT_SECS = 10;

const api = {
  get: async <TResponse>(request: Request) => {
    const { url, options = {}, errorDescription } = request;
    const { timeout = DEFAULT_TIMEOUT_SECS, ...fetchOptions} = options;

    const controller = new AbortController();
    const { signal } = controller;

    const timeoutId = setTimeout(() => {
      controller.abort();
    }, timeout * 1000);

    try {
      const response = await fetch(url, { ...fetchOptions, signal });

      if (response.ok) {
        const data = await response.json();
        return data as TResponse;
      }

      clearTimeout(timeoutId);

      const error: RequestError = {
        title: `${response.status}`,
        message: response.statusText,
        description: errorDescription,
      }

      throw new Error(JSON.stringify(error));
    } catch (error) {
      console.log(error);
      
      clearTimeout(timeoutId);

      if (error instanceof Error && error.name === 'AbortError') {
        console.log('Request timed out');

        const error: RequestError = {
          title: 'Oops',
          message: 'Request timed out',
        };

        throw new Error(JSON.stringify(error));
      }

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