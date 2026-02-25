import React, { createContext, useContext, useState, useEffect } from "react";

export interface Habit {
    _id: string;
    userId: string;
    title: string;
    emoji: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export type LogStatus = "completed" | "missed" | "skipped";

export interface HabitLog {
    _id: string;
    userId: string;
    habitId: string;
    date: string;
    status: LogStatus;
    createdAt: string;
    updatedAt: string;
}

interface HabitContextType {
    habits: Habit[];
    logs: HabitLog[];
    loading: boolean;

    fetchHabits: () => Promise<void>;
    createHabit: (title: string, emoji: string) => Promise<void>;
    deleteHabit: (id: string) => Promise<void>;
    createLog: (habitId: string,
        status: LogStatus,
        date: string) => Promise<void>;
    fetchAllLogs: () => Promise<void>;
}

const HabitContext = createContext<HabitContextType | undefined>(
    undefined
);

export function HabitProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [habits, setHabits] = useState<Habit[]>([]);
    const [logs, setLogs] = useState<HabitLog[]>([]);
    const [loading, setLoading] = useState(false);

    const API_URL = process.env.EXPO_PUBLIC__API_URL;

    const fetchHabits = async () => {
        try {
            const res = await fetch(`${API_URL}/habits`);
            if (!res.ok) throw new Error("Failed to fetch habits");

            const data = await res.json();
            setHabits(data.habits);
        } catch (error) {
            console.error("Failed to fetch habits:", error);
        }
    }

    const fetchAllLogs = async () => {
        try {
            const res = await fetch(`${API_URL}/logs`);
            if (!res.ok) throw new Error("Failed to fetch all logs");

            const data = await res.json();
            setLogs(data.logs);
        } catch (error) {
            console.error("Failed to fetch logs:", error);
        }
    }

    const createHabit = async (title: string, emoji: string) => {
        try {
            const res = await fetch(`${API_URL}/habits`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, emoji }),
            });
            if (!res.ok) throw new Error("Failed to create habit");

            const data = await res.json();
            setHabits(prev => [...prev, data.habit]);
        } catch (error) {
            console.error("Failed to create habit:", error);
        }
    }

    const deleteHabit = async (id: string) => {
        try {
            const res = await fetch(`${API_URL}/habits/${id}`, { method: 'DELETE' });
            if (!res.ok) throw new Error("Failed to delete habit");

            setHabits((prev) => prev.filter(habit => habit._id !== id));
            setLogs((prev) => prev.filter(log => log.habitId !== id));
        } catch (error) {
            console.error("Failed to delete habit:", error);
        }
    }

    const createLog = async (
        habitId: string,
        status: LogStatus,
        date: string
    ) => {
        try {
            const res = await fetch(`${API_URL}/logs/${habitId}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status, date }),
            });

            if (!res.ok) throw new Error("Failed to create log");

            const data = await res.json();

            setLogs(prev => [...prev, data.log]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                await Promise.all([
                    fetchHabits(),
                    fetchAllLogs()
                ]);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    return (
        <HabitContext.Provider
            value={{
                habits,
                logs,
                loading,
                fetchHabits,
                createHabit,
                deleteHabit,
                createLog,
                fetchAllLogs
            }}
        >
            {children}
        </HabitContext.Provider>
    );
}

export function useHabits() {
    const context = useContext(HabitContext);
    if (!context) {
        throw new Error("useHabits must be used inside HabitProvider");
    }
    return context;
}
