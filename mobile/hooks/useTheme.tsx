import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "react-native";

type ThemeType = "light" | "dark";

interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
    isDark: boolean;
    loaded: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "APP_THEME";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
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
            } catch (error) {
                console.error("Failed to load theme:", error);
            } finally {
                setLoaded(true);
            }
        };

        loadTheme();
    }, []);

    const toggleTheme = async () => {
        const newTheme: ThemeType = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        await AsyncStorage.setItem(STORAGE_KEY, newTheme);
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
                isDark: theme === "dark",
                loaded,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }

    return context;
}
