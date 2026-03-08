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
import { useHabits } from '../../hooks/useHabits';

export default function AddHabit() {
    const { theme } = useTheme();
    const styles = createAddHabitStyles(theme);
    const { createHabit } = useHabits();

    const [selectedEmoji, setSelectedEmoji] = useState("💧");
    const [title, setTitle] = useState('');

    const handleCreate = async () => {
        if (!title.trim()) return;

        await createHabit(title, selectedEmoji);
        setTitle("");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Create New Habit</Text>

            <Text style={styles.label}>Habit Name</Text>
            <TextInput
                value={title}
                onChangeText={setTitle}
                placeholder="Enter habit name..."
                placeholderTextColor="#999"
                style={styles.input}
            />

            <Text style={styles.label}>Choose Icon</Text>
            <EmojiSelector
                selected={selectedEmoji}
                onSelect={setSelectedEmoji}
            />

            <TouchableOpacity style={styles.button} onPress={handleCreate}>
                <Text style={styles.buttonText}>
                    {selectedEmoji} Create Habit
                </Text>
            </TouchableOpacity>
        </View>
    );
}
