import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const ACCENT = "#2f95dc";

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back 👋</Text>

            <TextInput
                placeholder="Email"
                placeholderTextColor="#999"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                placeholder="Password"
                placeholderTextColor="#999"
                style={styles.input}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Link href="/register" style={styles.link}>
                Don't have an account? Sign up
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 24,
        backgroundColor: "#f5f6fa",
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 40,
        textAlign: "center",
    },
    input: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 14,
        marginBottom: 16,
        fontSize: 16,
    },
    button: {
        backgroundColor: ACCENT,
        paddingVertical: 16,
        borderRadius: 16,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    link: {
        marginTop: 20,
        textAlign: "center",
        color: ACCENT,
    },
});
