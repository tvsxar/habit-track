import { StyleSheet } from "react-native";

export const createEmptyStateStyles = (theme: "light" | "dark") => {
  const isDark = theme === "dark";

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
      backgroundColor: isDark ? "#121212" : "#fff",
    },
    emoji: {
      fontSize: 64,
      marginBottom: 16,
      color: isDark ? "#fff" : "#000",
    },
    message: {
      fontSize: 20,
      fontWeight: "600",
      textAlign: "center",
      marginBottom: 8,
      color: isDark ? "#ccc" : "#555",
    },
    tip: {
      fontSize: 14,
      textAlign: "center",
      color: isDark ? "#888" : "#888",
    },
  });
};
