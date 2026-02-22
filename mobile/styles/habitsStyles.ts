import { StyleSheet } from "react-native";

export function createHabitsStyles(theme: "light" | "dark") {
  const isDark = theme === "dark";

  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 60,
      backgroundColor: isDark ? "#121212" : "#f5f6fa",
    },
    header: {
      fontSize: 26,
      fontWeight: "700",
      marginBottom: 20,
      color: isDark ? "#fff" : "#000",
    },
  });
}
