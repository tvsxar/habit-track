import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { createTabLayoutStyles } from "../../styles/tabsLayoutStyles";

export default function TabLayout() {
    const { theme } = useTheme();
    const styles = createTabLayoutStyles(theme);

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: styles.activeTint.color,
                tabBarInactiveTintColor: styles.inactiveTint.color,
                tabBarStyle: styles.tabBar,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Habits",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="calendar-outline"
                            color={color}
                            size={size + 2}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="add"
                options={{
                    title: "",
                    tabBarIcon: () => (
                        <View style={styles.addButton}>
                            <Ionicons name="add" color="white" size={40} />
                        </View>
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="person-outline"
                            color={color}
                            size={size + 2}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
