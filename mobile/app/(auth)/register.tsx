import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useTheme } from '../../hooks/useTheme';
import { createRegisterStyles } from '../../styles/registerStyles';

const ACCENT = "#2f95dc";

export default function Register() {
  const { theme } = useTheme();
  const styles = createRegisterStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account ✨</Text>

      <TextInput
        placeholder="Username"
        placeholderTextColor={theme === "dark" ? "#777777" : "#999999"}
        style={styles.input}
        keyboardType="default"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="email"
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#999"
        style={styles.input}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Link href="/login" style={styles.link}>
        Already have an account? Log in
      </Link>
    </View>
  );
}
