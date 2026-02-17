import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from "react-native";

const ACCENT = "#2f95dc";

export default function Profile() {
  const [isDark, setIsDark] = useState(false);

  const themeStyles = isDark ? darkStyles : lightStyles;

  return (
    <View style={[styles.container, themeStyles.container]}>
      <Text style={[styles.name, themeStyles.text]}>
        John Doe
      </Text>

      <View style={styles.statsContainer}>
        <View style={[styles.statCard, themeStyles.card]}>
          <Text style={[styles.statNumber, themeStyles.text]}>
            5
          </Text>
          <Text style={styles.statLabel}>Habits</Text>
        </View>

        <View style={[styles.statCard, themeStyles.card]}>
          <Text style={[styles.statNumber, themeStyles.text]}>
            12 🔥
          </Text>
          <Text style={styles.statLabel}>Current Streak</Text>
        </View>
      </View>

      <View style={styles.themeRow}>
        <Text style={[styles.themeLabel, themeStyles.text]}>
          Dark Mode
        </Text>
        <Switch
          value={isDark}
          onValueChange={setIsDark}
          trackColor={{ true: ACCENT }}
        />
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 40,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  statCard: {
    flex: 1,
    paddingVertical: 24,
    borderRadius: 16,
    alignItems: "center",
    marginHorizontal: 6,
  },
  statNumber: {
    fontSize: 22,
    fontWeight: "700",
  },
  statLabel: {
    marginTop: 6,
    color: "#666",
  },
  themeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  themeLabel: {
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: "#e74c3c",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f6fa",
  },
  text: {
    color: "#000",
  },
  card: {
    backgroundColor: "#fff",
  },
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
  },
  text: {
    color: "#fff",
  },
  card: {
    backgroundColor: "#1e1e1e",
  },
});
