import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "react-native";

type ThemeType = "light" | "dark";

const STORAGE_KEY = "APP_THEME";

export function useTheme() {
    const systemTheme = useColorScheme() ?? "light";

    const [theme, setTheme] = useState<ThemeType>(systemTheme);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const loadTheme = async () => {
            try {
                const storedTheme = await AsyncStorage.getItem(STORAGE_KEY);

                if (storedTheme === "light" || storedTheme === "dark") {
                    setTheme(storedTheme);
                }

                setLoaded(true);
            } catch (error) {
                console.error('Failed to load theme from storage:', error);
            }
        }

        loadTheme();
    }, [])

    const toggleTheme = async () => {
        const newTheme: ThemeType = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        await AsyncStorage.setItem(STORAGE_KEY, newTheme);
    }

    return {
        theme,
        toggleTheme,
        isDark: theme === "dark",
        loaded,
    };
}
