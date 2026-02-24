import { Stack } from "expo-router";
import { HabitProvider } from '../hooks/useHabits';

export default function RootLayout() {
  return (
    <HabitProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </HabitProvider>);
}
