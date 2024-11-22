// import axios from "axios";
import { LoginData, signupData } from "../types/auth";
import { apiClient } from "./axios";

// const API_URL = import.meta.env.VITE_PUBLIC_API_URL;

export const authApi = {
  login: (data: LoginData) => apiClient.post("/auth/login", data),
  signup: (data: signupData) => apiClient.post("/auth/signup", data),
  demo: () => apiClient.get("/demo"),
  logout: () => apiClient.post("/auth/logout", {}),
  getProfile: () => apiClient.get("/auth/profile"),
};
// export const login = async (
//   credentials: LoginCredentials
// ): Promise<AuthResponse> => {
//   const response = await axios.post<AuthResponse>(
//     `${API_URL}/auth/login`,
//     credentials,
//     { withCredentials: true }
//   );
//   return response.data;
// };

// export const checkAuthStatus = async (): Promise<AuthResponse> => {
//   const response = await axios.get<AuthResponse>(`${API_URL}/auth/status`, {
//     withCredentials: true,
//   });
//   return response.data;
// };
