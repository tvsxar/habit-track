import { View, Text } from "react-native";
import { useTheme } from "../hooks/useTheme";
import { createHabitCardStyles } from "../styles/habitCardStyles";

interface HabitCardProps {
    title: string;
    streak: number;
    icon: string;
}

export default function HabitCard({ title, streak, icon }: HabitCardProps) {
    const { theme } = useTheme();
    const styles = createHabitCardStyles(theme);

    return (
        <View style={styles.card}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.icon}>{icon}</Text>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>🔥 {streak} day streak</Text>
                </View>
            </View>
        </View>
    );
}
