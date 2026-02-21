import { StyleSheet, Platform } from "react-native";

const ACCENT = "#2f95dc";

export function createTabLayoutStyles(theme: "light" | "dark") {
  const isDark = theme === "dark";

  return StyleSheet.create({
    tabBar: {
      height: 80,
      paddingBottom: 5,
      paddingTop: 10,
      backgroundColor: isDark ? "#1c1c1e" : "#fff",
      borderTopWidth: 0,
      shadowColor: "#000",
      shadowOpacity: isDark ? 0.4 : 0.08,
      shadowOffset: { width: 0, height: -3 },
      shadowRadius: 6,
      elevation: 10,
    },
    addButton: {
      width: 70,
      height: 70,
      backgroundColor: ACCENT,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: Platform.OS === "ios" ? 20 : 30,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
    activeTint: {
      color: ACCENT,
    },
    inactiveTint: {
      color: isDark ? "#aaa" : "gray",
    },
  });
}
