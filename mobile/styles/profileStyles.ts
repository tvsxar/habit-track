import { StyleSheet } from "react-native";

const ACCENT = "#2f95dc";
const LOGOUT = "#e74c3c";

export function createProfileStyles(theme: "light" | "dark") {
  const isDark = theme === "dark";

  const colors = {
    background: isDark ? "#121212" : "#f5f6fa",
    text: isDark ? "#fff" : "#000",
    card: isDark ? "#1e1e1e" : "#fff",
  };

  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 80,
      backgroundColor: colors.background,
    },
    name: {
      fontSize: 24,
      fontWeight: "700",
      marginBottom: 40,
      color: colors.text,
    },
    statsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 40,
    },
    statCard: {
      flex: 1,
      paddingVertical: 24,
      borderRadius: 16,
      alignItems: "center",
      marginHorizontal: 6,
      backgroundColor: colors.card,
    },
    statNumber: {
      fontSize: 22,
      fontWeight: "700",
      color: colors.text,
    },
    statLabel: {
      marginTop: 6,
      color: "#666",
    },
    themeRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 40,
    },
    themeLabel: {
      fontSize: 16,
      color: colors.text,
    },
    logoutButton: {
      backgroundColor: LOGOUT,
      paddingVertical: 16,
      borderRadius: 16,
      alignItems: "center",
    },
    logoutText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
    },
  });
}
