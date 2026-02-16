import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

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

const styles = StyleSheet.create({
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
        backgroundColor: "#fff",
    },
    selectedEmoji: {
        borderWidth: 2,
        borderColor: ACCENT,
    },
    emoji: {
        fontSize: 26,
    },
});
