import config from './config';

const hasFormDataBody = (body: unknown): body is FormData =>
  typeof FormData !== 'undefined' && body instanceof FormData;

export const apiClient = {
  baseUrl: config.apiBaseUrl,

  async request(endpoint: string, options: RequestInit = {}) {
    // Use relative paths when running in the browser so requests go to Next.js
    // API routes (which then proxy or call the real backend). On the server
    // (during SSR or server components) keep using the configured backend
    // base URL so server-side code can reach the backend directly.
    const runtimeBase = typeof window !== "undefined" ? "" : this.baseUrl;
    const url = `${runtimeBase}${endpoint}`;
    const body = options.body;

    const headers = hasFormDataBody(body)
      ? options.headers
      : {
          'Content-Type': 'application/json',
          ...options.headers,
        };

    return fetch(url, { ...options, headers });
  },

  // Convenience methods
  get: (endpoint: string, options?: RequestInit) =>
    apiClient.request(endpoint, { ...options, method: 'GET' }),

  post: (endpoint: string, data?: any, options?: RequestInit) =>
    apiClient.request(endpoint, {
      ...options,
      method: 'POST',
      body: hasFormDataBody(data) ? data : data ? JSON.stringify(data) : undefined,
    }),

  put: (endpoint: string, data?: any, options?: RequestInit) =>
    apiClient.request(endpoint, {
      ...options,
      method: 'PUT',
      body: hasFormDataBody(data) ? data : data ? JSON.stringify(data) : undefined,
    }),

  delete: (endpoint: string, options?: RequestInit) =>
    apiClient.request(endpoint, { ...options, method: 'DELETE' }),
};

export default apiClient;
