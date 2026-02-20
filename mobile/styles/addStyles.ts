import { StyleSheet } from "react-native";

export const ACCENT = "#2f95dc";

export function createAddHabitStyles(theme: "light" | "dark") {
  const isDark = theme === "dark";

  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 60,
      paddingBottom: 25,
      backgroundColor: isDark ? "#121212" : "#f5f6fa",
    },
    header: {
      fontSize: 26,
      fontWeight: "700",
      marginBottom: 30,
      color: isDark ? "#fff" : "#000",
    },
    label: {
      fontSize: 14,
      marginBottom: 8,
      color: isDark ? "#aaa" : "#666",
    },
    input: {
      backgroundColor: isDark ? "#1e1e1e" : "#fff",
      padding: 14,
      borderRadius: 14,
      marginBottom: 25,
      fontSize: 16,
      color: isDark ? "#fff" : "#000",
    },
    button: {
      backgroundColor: ACCENT,
      paddingVertical: 16,
      borderRadius: 16,
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
    },
  });
}
