import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../hooks/useTheme";
import { createHabitCardStyles } from "../styles/habitCardStyles";
import { useHabits } from "@/hooks/useHabits";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface HabitCardProps {
    id: string;
    title: string;
    streak: number;
    icon: string;
    loggedToday: boolean;
}

export default function HabitCard({ id, title, streak, icon, loggedToday }: HabitCardProps) {
    const { theme } = useTheme();
    const styles = createHabitCardStyles(theme);
    const { createLog } = useHabits();

    const handleLog = async (status: "completed" | "skipped") => {
        if (loggedToday) return;
        await createLog(id, status, new Date().toISOString());
    };

    return (
        <View style={styles.card}>
            <View style={styles.left}>
                <Text style={styles.icon}>{icon}</Text>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>🔥 {streak} day streak</Text>
                </View>
            </View>

            <View style={styles.actions}>
                <TouchableOpacity
                    style={styles.completeButton}
                    onPress={() => handleLog("completed")}
                    disabled={loggedToday}
                >
                    <MaterialCommunityIcons
                        name="check"
                        size={26}
                        color="#fff"
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.skipButton}
                    onPress={() => handleLog("skipped")}
                    disabled={loggedToday}
                >
                    <MaterialCommunityIcons
                        name="skip-next"
                        size={26}
                        color="#fff"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}
