import axios, { type AxiosInstance, type AxiosResponse } from "axios";

/**
 * Pre-configured Axios instance for application API requests
 */
export const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "/api",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add client-side authorization tokens or custom headers if available
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("auth_token");
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    // Standardize error handling
    const message =
      error.response?.data?.message || error.message || "An unexpected error occurred";
    return Promise.reject(new Error(message));
  }
);

export default apiClient;
