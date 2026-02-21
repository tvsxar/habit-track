import { StyleSheet } from "react-native";

const ACCENT = "#2f95dc";

export function createHabitCardStyles(theme: "light" | "dark") {
  const isDark = theme === "dark";

  return StyleSheet.create({
    card: {
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
      backgroundColor: isDark ? "#1e1e1e" : "#fff",
      borderRadius: 12,
      marginBottom: 12,
      shadowColor: "#000",
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 2,
    },
    icon: {
      fontSize: 26,
      marginRight: 14,
    },
    title: {
      fontSize: 16,
      fontWeight: "600",
      color: isDark ? "#fff" : "#000",
    },
    subtitle: {
      marginTop: 6,
      color: isDark ? "#aaa" : "#666",
    },
    statusDot: {
      width: 14,
      height: 14,
      borderRadius: 7,
      backgroundColor: ACCENT,
    },
  });
}
