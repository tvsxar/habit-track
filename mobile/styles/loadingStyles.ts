import { StyleSheet } from "react-native";

const ACCENT = "#2f95dc";

export function createLoadingStyles(theme: "light" | "dark") {
  const isDark = theme === "dark";

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: isDark ? "#1e1e1e" : "#fff",
    },
    text: {
      marginTop: 16,
      fontSize: 16,
      fontWeight: "500",
      color: ACCENT,
    },
  });
}
