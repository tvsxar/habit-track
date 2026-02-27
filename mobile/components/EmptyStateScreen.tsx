import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../hooks/useTheme";
import { createEmptyStateStyles } from "@/styles/emptyStateStyles";

interface EmptyStateScreenProps {
    message?: string;
}

export default function EmptyStateScreen({ message }: EmptyStateScreenProps) {
    const { theme } = useTheme();
    const styles = createEmptyStateStyles(theme);

    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>📭</Text>
            <Text style={styles.message}>
                {message || "You don't have any habits yet."}
            </Text>
            <Text style={styles.tip}>
                Start by creating a new habit to track your progress!
            </Text>
        </View>
    );
}
