import { StyleSheet } from "react-native";

const ACCENT = "#2f95dc";

export function createEmojiSelectorStyles(theme: "light" | "dark") {
  const isDark = theme === "dark";

  return StyleSheet.create({
    scroll: {
      marginBottom: 40,
    },
    emojiContainer: {
      width: 55,
      height: 55,
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 12,
      backgroundColor: isDark ? "#1e1e1e" : "#fff",
    },
    selectedEmoji: {
      borderWidth: 2,
      borderColor: ACCENT,
    },
    emoji: {
      fontSize: 26,
    },
  });
}
