import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

interface User {
    _id: string;
    username: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (username: string, email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

export function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadSession = async () => {
            try {
                const [[, savedToken], [, savedUser]] =
                    await AsyncStorage.multiGet(["token", "user"]);

                if (savedToken && savedUser) {
                    setToken(savedToken);
                    setUser(JSON.parse(savedUser));
                }
            } catch (error) {
                console.error("Failed to restore session:", error);
            } finally {
                setLoading(false);
            }
        };

        loadSession();
    }, []);

    const handleAuthRequest = async (
        endpoint: string,
        body: object
    ) => {
        try {
            const res = await fetch(`${API_URL}${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Authentication failed");
            }

            setUser(data.user);
            setToken(data.token);

            await AsyncStorage.multiSet([
                ["token", data.token],
                ["user", JSON.stringify(data.user)],
            ]);
        } catch (error: any) {
            throw new Error(error.message || "Network error");
        }
    };

    const register = async (
        username: string,
        email: string,
        password: string
    ) => {
        setLoading(true);
        await handleAuthRequest("/auth/register", {
            username,
            email,
            password,
        });
        setLoading(false);
    };

    const login = async (email: string, password: string) => {
        setLoading(true);
        await handleAuthRequest("/auth/login", {
            email,
            password,
        });
        setLoading(false);
    };

    const logout = async () => {
        try {
            setUser(null);
            setToken(null);
            await AsyncStorage.multiRemove(["token", "user"]);
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                loading,
                login,
                register,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }
    return context;
}
