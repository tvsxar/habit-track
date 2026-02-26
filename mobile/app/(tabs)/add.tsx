import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import EmojiSelector from "../../components/EmojiSelector";
import { useTheme } from "../../hooks/useTheme";
import { createAddHabitStyles } from "../../styles/addStyles";

export default function AddHabit() {
    const { theme } = useTheme();
    const styles = createAddHabitStyles(theme);

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
