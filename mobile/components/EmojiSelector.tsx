import { Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from "../hooks/useTheme";
import { createEmojiSelectorStyles } from "../styles/emojiSelectorStyles";


interface EmojiSelectorProps {
    selected: string;
    onSelect: (emoji: string) => void;
}

const ACCENT = "#2f95dc";

const emojiOptions = [
    "💧", "💪", "📚", "🧘", "🏃", "🥗", "😴",
    "🧠", "🎯", "📝", "🚴", "🎵", "🌅", "🔥",
    "🏋️", "🥤", "📖", "💻", "🧑‍💻", "🚶", "🛌",
    "🍎", "🥑", "🧃", "🎨", "⏰", "📅"
];

export default function EmojiSelector({ selected, onSelect }: EmojiSelectorProps) {
    const { theme } = useTheme();
    const styles = createEmojiSelectorStyles(theme);

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scroll}
        >
            {emojiOptions.map((emoji, index) => {
                const isSelected = emoji === selected;

                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() => onSelect(emoji)}
                        style={[
                            styles.emojiContainer,
                            isSelected && styles.selectedEmoji,
                        ]}
                    >
                        <Text style={styles.emoji}>{emoji}</Text>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
}
