import { View, Text, StyleSheet } from "react-native";

interface HabitCardProps {
    title: string;
    streak: number;
    icon: string;
}

export default function HabitCard({ title, streak, icon }: HabitCardProps) {
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

const styles = StyleSheet.create({
    icon: {
        fontSize: 26,
        marginRight: 14,
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 12,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
    },
    subtitle: {
        marginTop: 6,
        color: "#666",
    },
    statusDot: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: "#2f95dc",
    },
});
