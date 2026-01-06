import api from "./api";
import { DOCTOR_PATH } from "../constants/paths";

export const doctorService = {
  me: () => api.get(`${DOCTOR_PATH}/me`),
};
