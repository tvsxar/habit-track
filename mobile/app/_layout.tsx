import { Stack } from "expo-router";
import { HabitProvider } from '../hooks/useHabits';
import { AuthProvider, useAuth } from '../hooks/useAuth';
import LoadingScreen from "@/components/LoadingScreen";
import { ThemeProvider, useTheme } from "../hooks/useTheme";

function RootStack() {
  const { user, loading } = useAuth();
  const { theme } = useTheme();

  if (loading) return <LoadingScreen />;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="(tabs)" />
      ) : (
        <Stack.Screen name="(auth)/login" />
      )}
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <HabitProvider>
          <RootStack />
        </HabitProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
