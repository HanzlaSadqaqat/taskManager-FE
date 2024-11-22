// src/lib/axios.ts
import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
import toast from "../components/Toast";

// Create axios instance
const api = axios.create({
  baseURL: "https://manage-task-be.vercel.app/api",
  //   withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Get token from localStorage if exists
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  // ... existing code ...
  (error: AxiosError) => {
    const message =
      (error.response?.data as { message?: string })?.message ||
      "An error occurred";

    // Handle common status codes
    // ... existing code ...
    // Handle common status codes
    switch (error.response?.status) {
      case 401:
        localStorage.removeItem("token");
        // window.location.href = "/login";
        break;
      case 403:
        toast({
          title: "Error",
          message: "You do not have permission to perform this action",
          type: "error",
        });
        break;
      case 404:
        toast({
          title: "Error",
          message: "Resource not found",
          type: "error",
        });
        break;
      case 500:
        toast({
          title: "Error",
          message: "Server error. Please try again later",
          type: "error",
        });
        break;
      default:
        toast({
          title: "Error",
          message: message,
          type: "error",
        });
    }

    return Promise.reject(error);
  }
);

// Type-safe request methods
export const apiClient = {
  get: <T>(url: string) =>
    api
      .get<T>(url)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
        return error;
      }),

  post: <T>(url: string, data: any) =>
    api
      .post<T>(url, data)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
        return error;
      }),

  put: <T>(url: string, data: any) =>
    api
      .put<T>(url, data)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        return error;
      }),

  delete: <T>(url: string) =>
    api
      .delete<T>(url)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        return error;
      }),
};

// Example usage
// export interface AuthResponse {
//   user: {
//     id: string;
//     email: string;
//     name: string;
//   };
//   token: string;
// }

// Auth service example
// export const authApi = {
//   login: (data: LoginData) => apiClient.post<AuthResponse>("/auth/login", data),

//   logout: () => apiClient.post<void>("/auth/logout", {}),

//   getProfile: () => apiClient.get<AuthResponse>("/auth/profile"),
// };

// Example usage in components:
/*
// Login component example
const handleLogin = async (email: string, password: string) => {
  try {
    const response = await authApi.login({ email, password });
    localStorage.setItem('token', response.token);
    // Handle successful login
  } catch (error) {
    // Error is already handled by interceptor
  }
};

// Profile component example
const fetchProfile = async () => {
  try {
    const profile = await authApi.getProfile();
    // Handle profile data
  } catch (error) {
    // Error is already handled by interceptor
  }
};
*/
