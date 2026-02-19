import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useTheme } from '../../hooks/useTheme';
import { createLoginStyles } from '../../styles/loginStyles';

export default function Login() {
    const { theme } = useTheme();
    const styles = createLoginStyles(theme);

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
