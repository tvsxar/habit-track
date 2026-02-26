import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Link, useRouter } from "expo-router";
import { useTheme } from '../../hooks/useTheme';
import { createLoginStyles } from '../../styles/loginStyles';
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export default function Login() {
    const { theme } = useTheme();
    const styles = createLoginStyles(theme);
    const router = useRouter();
    const { login } = useAuth();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setError(null);
        setLoading(true);

        try {
            await login(email, password);
            router.replace("/(tabs)");
        } catch (err: any) {
            setError(err.message || "Login failed");
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back 👋</Text>

            <TextInput
                placeholder="Email"
                placeholderTextColor="#999"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                placeholder="Password"
                placeholderTextColor="#999"
                style={styles.input}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Link href="/register" style={styles.link}>
                Don't have an account? Sign up
            </Link>
        </View>
    );
}
