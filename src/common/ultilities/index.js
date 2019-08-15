import { AsyncStorage } from "react-native";
import * as SecureStore from "expo-secure-store";

export const setTokens = async (accessTkn, refreshTkn) => {
  await Promise.all([
    AsyncStorage.setItem("access_token", accessTkn),
    SecureStore.setItemAsync("refresh_token", refreshTkn)
  ]);
};

export const clearTokens = async () => {
  await Promise.all([
    AsyncStorage.setItem("access_token", ""),
    SecureStore.setItemAsync("refresh_token", "")
  ]);
};

export const setUserDisplayName = async name => {
  await AsyncStorage.setItem("user_display_name", name);
};

export const clearUserDisplayName = async () => {
  await AsyncStorage.setItem("user_display_name", "");
};
