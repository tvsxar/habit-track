import { View, Text } from "react-native";
import { useTheme } from "../hooks/useTheme";
import { createHabitCardStyles } from "../styles/habitCardStyles";
import { useHabits } from "@/hooks/useHabits";

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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.icon}>{icon}</Text>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>🔥 {streak} day streak</Text>

                    <View style={{ flexDirection: "row", marginTop: 8 }}>
                        <Text
                            onPress={() => handleLog("completed")}
                            style={{ marginRight: 12, opacity: loggedToday ? 0.5 : 1 }}
                        >
                            ✅
                        </Text>

                        <Text
                            onPress={() => handleLog("skipped")}
                            style={{ opacity: loggedToday ? 0.5 : 1 }}
                        >
                            ⏭
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
