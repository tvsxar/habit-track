import { StyleSheet } from "react-native";

type ThemeType = "light" | "dark";

const ACCENT = "#2f95dc";

const colors = {
  light: {
    background: "#f5f6fa",
    card: "#ffffff",
    text: "#000000",
    placeholder: "#999999",
    inputBackground: "#ffffff",
  },
  dark: {
    background: "#121212",
    card: "#1e1e1e",
    text: "#ffffff",
    placeholder: "#777777",
    inputBackground: "#1e1e1e",
  },
};

export const createRegisterStyles = (theme: ThemeType) => {
  const c = colors[theme];

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 24,
      backgroundColor: c.background,
    },
    title: {
      fontSize: 28,
      fontWeight: "700",
      marginBottom: 40,
      textAlign: "center",
      color: c.text,
    },
    input: {
      backgroundColor: c.inputBackground,
      padding: 16,
      borderRadius: 14,
      marginBottom: 16,
      fontSize: 16,
      color: c.text,
    },
    button: {
      backgroundColor: ACCENT,
      paddingVertical: 16,
      borderRadius: 16,
      alignItems: "center",
      marginTop: 10,
    },
    buttonText: {
      color: "#ffffff",
      fontSize: 16,
      fontWeight: "600",
    },
    link: {
      marginTop: 20,
      textAlign: "center",
      color: ACCENT,
    },
  });
};
