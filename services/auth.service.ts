import api from "./api";
import { LoginRequest, RegisterRequest } from "../types/auth.types";
import { AUTH_PATH } from "../constants/paths";

const SERVICE_PATH = "/auth-service/api/auth";

export const authService = {
  register: (data: RegisterRequest) =>
    api.post(`${AUTH_PATH}/register`, data),

  login: (data: LoginRequest) =>
    api.post(`${AUTH_PATH}/login`, data),

  //me endpoint to be emplemented depending on role
  me: () => api.get(`${SERVICE_PATH}/me`),

};
