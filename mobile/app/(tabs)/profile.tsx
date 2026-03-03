import {
  View,
  Text,
  TouchableOpacity,
  Switch,
} from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { createProfileStyles } from "../../styles/profileStyles";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "expo-router";
import { useHabits } from "../../hooks/useHabits";

export default function Profile() {
  const { theme, toggleTheme, isDark } = useTheme();
  const styles = createProfileStyles(theme);
  const { logout, user } = useAuth();
  const router = useRouter();
  const { habits } = useHabits();

  const habitsCount = habits.length;

  const maxStreak = habits.reduce((max, habit) => {
    return habit.streak > max ? habit.streak : max;
  }, 0);

  const handleLogout = async () => {
    await logout();
    router.replace("/(auth)")
  };


  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user?.username}</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{habitsCount}</Text>
          <Text style={styles.statLabel}>Habits</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{maxStreak} 🔥</Text>
          <Text style={styles.statLabel}>Current Streak</Text>
        </View>
      </View>

      <View style={styles.themeRow}>
        <Text style={styles.themeLabel}>Dark Mode</Text>
        <Switch
          value={isDark}
          onValueChange={toggleTheme}
          trackColor={{ true: "#2f95dc" }}
        />
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}
