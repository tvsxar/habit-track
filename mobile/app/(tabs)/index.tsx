import { View, Text, FlatList } from "react-native";
import HabitCard from "../../components/HabitCard";
import { useTheme } from "../../hooks/useTheme";
import { createHabitsStyles } from "../../styles/habitsStyles";
import { useHabits } from "@/hooks/useHabits";
import LoadingScreen from "@/components/LoadingScreen";
import EmptyStateScreen from "@/components/EmptyStateScreen";

export default function Habits() {
  const { habits, loading } = useHabits();
  const { theme } = useTheme();
  const styles = createHabitsStyles(theme);

  if (loading) return <LoadingScreen />

  if (habits.length === 0) return <EmptyStateScreen message="No habits yet!" />;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Habits</Text>

      <FlatList
        data={habits}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <HabitCard
            title={item.title}
            streak={item.streak}
            icon={item.emoji}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
