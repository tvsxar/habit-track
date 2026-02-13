import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { View, Platform } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#2f95dc",
                tabBarInactiveTintColor: "gray",
                tabBarStyle: {
                    height: 80,
                    paddingBottom: 5,
                    paddingTop: 10
                }
            }}
        >
            <Tabs.Screen
                name="habits"
                options={{
                    title: "Habits",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="calendar-outline" color={color} size={size + 2} />
                    ),
                }}
            />

            <Tabs.Screen
                name="add"
                options={{
                    title: "",
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            width: 70,
                            height: 70,
                            backgroundColor: '#2f95dc',
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: Platform.OS === 'ios' ? 20 : 30,
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.3,
                            shadowRadius: 4.65,
                            elevation: 8,
                        }}>
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
                        <Ionicons name="person-outline" color={color} size={size + 2} />
                    ),
                }}
            />
        </Tabs>
    );
}
