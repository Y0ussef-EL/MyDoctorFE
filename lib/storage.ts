import * as SecureStore from "expo-secure-store";

export const storage = {
  setToken: (key: string, value: string) =>
    SecureStore.setItemAsync(key, value),

  getToken: (key: string) =>
    SecureStore.getItemAsync(key),

  removeToken: (key: string) =>
    SecureStore.deleteItemAsync(key),
};
