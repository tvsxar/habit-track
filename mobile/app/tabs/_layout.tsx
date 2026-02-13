import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="habits"
                options={{ title: "Habits" }}
            />

            <Tabs.Screen
                name="add"
                options={{ title: "Add" }}
            />

            <Tabs.Screen
                name="profile"
                options={{ title: "Profile" }}
            />
        </Tabs>
    );
}
