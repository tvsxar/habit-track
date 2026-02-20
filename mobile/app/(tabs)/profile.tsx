import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
} from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { createProfileStyles } from "../../styles/profileStyles";

export default function Profile() {
  const { theme } = useTheme();
  const styles = createProfileStyles(theme);

  const [isDark, setIsDark] = useState(theme === "dark");

  return (
    <View style={styles.container}>
      <Text style={styles.name}>John Doe</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Habits</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>12 🔥</Text>
          <Text style={styles.statLabel}>Current Streak</Text>
        </View>
      </View>

      <View style={styles.themeRow}>
        <Text style={styles.themeLabel}>Dark Mode</Text>
        <Switch
          value={isDark}
          onValueChange={setIsDark}
          trackColor={{ true: "#2f95dc" }}
        />
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}
