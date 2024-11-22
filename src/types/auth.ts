// src/types/auth.ts
export interface IUser {
  _id: string;
  email: string;
  name: string;
  password?: string;
  provider: "local" | "google" | "github";
  providerId?: string;
  avatar?: string;
  verified: boolean;
  verificationToken?: string;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  createdAt: Date;
}

export interface RegisterDTO {
  name: string;
  email: string;
  password: string;
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: Omit<IUser, "password" | "verificationToken" | "resetPasswordToken">;
}
export interface LoginData {
  email: string;
  password: string;
}
export interface signupData {
  email: string;
  password: string;
  name: string;
  conformPassword: string;
}

export interface ResetPasswordDTO {
  token: string;
  newPassword: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
