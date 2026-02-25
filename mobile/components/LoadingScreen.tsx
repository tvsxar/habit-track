import { createLoadingStyles } from "@/styles/loadingStyles";
import React from "react";
import { View, ActivityIndicator, Text } from "react-native";

export default function LoadingScreen({ theme = "light" }: { theme?: "light" | "dark" }) {
    const styles = createLoadingStyles(theme);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#2f95dc" />
            <Text style={styles.text}>Loading...</Text>
        </View>
    );
}
