"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { refreshAccessToken } from "@/lib/api";

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    accessToken: string | null;
    setAuth: (user: User | null, token: string | null) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [accessToken, setToken] = useState<string | null>(null);

    const setAuth = (u: User | null, token: string | null) => {
        setUser(u);
        setToken(token);
    };

    const logout = async () => {
        await fetch("http://localhost:4000/api/auth/logout", {
            method: "POST",
            credentials: "include"
        });

        setAuth(null, null);
    };

    useEffect(() => {
        (async () => {
            const token = await refreshAccessToken();
            if (!token) return;
            setToken(token);
            const res = await fetch("http://localhost:4000/api/auth/me", {
                headers: { Authorization: `Bearer ${token}` }
            });
            const data = await res.json();
            if (data.user) setUser(data.user);
        })();
    }, []);

    return (
        <AuthContext.Provider value={{ user, accessToken, setAuth, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext)!;
