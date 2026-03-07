import { StyleSheet } from "react-native";

export function createHabitCardStyles(theme: "light" | "dark") {
  const isDark = theme === "dark";

  return StyleSheet.create({
    card: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 16,
      backgroundColor: isDark ? "#1e1e1e" : "#fff",
      borderRadius: 12,
      marginBottom: 12,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      elevation: 3,
    },
    left: {
      flexDirection: "row",
      alignItems: "center",
    },
    icon: {
      fontSize: 32,
      marginRight: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: "700",
      color: isDark ? "#fff" : "#111",
    },
    subtitle: {
      marginTop: 4,
      fontSize: 14,
      color: isDark ? "#aaa" : "#666",
    },
    actions: {
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
    },
    completeButton: {
      backgroundColor: "#4CAF50",
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    skipButton: {
      backgroundColor: "#888",
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      color: "white",
      fontWeight: "700",
      fontSize: 16,
    },
  });
}
