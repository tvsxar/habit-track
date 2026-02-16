import { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import EmojiSelector from "../../components/EmojiSelector";

const ACCENT = "#2f95dc";

export default function AddHabit() {
    const [selectedEmoji, setSelectedEmoji] = useState("💧");

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Create New Habit</Text>

            <Text style={styles.label}>Habit Name</Text>
            <TextInput
                placeholder="Enter habit name..."
                placeholderTextColor="#999"
                style={styles.input}
            />

            <Text style={styles.label}>Choose Icon</Text>
            <EmojiSelector
                selected={selectedEmoji}
                onSelect={setSelectedEmoji}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    {selectedEmoji} Create Habit
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 60,
        backgroundColor: "#f5f6fa",
        paddingBottom: 25,
    },
    header: {
        fontSize: 26,
        fontWeight: "700",
        marginBottom: 30,
    },
    label: {
        fontSize: 14,
        marginBottom: 8,
        color: "#666",
    },
    input: {
        backgroundColor: "#fff",
        padding: 14,
        borderRadius: 14,
        marginBottom: 25,
        fontSize: 16,
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
