import { View, Text, StyleSheet, FlatList } from "react-native";
import HabitCard from "../../components/HabitCard";
import { useTheme } from "../../hooks/useTheme";
import { createHabitsStyles } from "../../styles/habitsStyles";


const mockHabits = [
  { id: "1", title: "Drink Water", streak: 5, icon: "💧" },
  { id: "2", title: "Workout", streak: 12, icon: "💪" },
  { id: "3", title: "Read 10 Pages", streak: 3, icon: "📚" },
];

export default function Habits() {
  const { theme } = useTheme();
  const styles = createHabitsStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Habits</Text>

      <FlatList
        data={mockHabits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HabitCard
            title={item.title}
            streak={item.streak}
            icon={item.icon}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: "#f5f6fa",
  },
  header: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
  },
});
