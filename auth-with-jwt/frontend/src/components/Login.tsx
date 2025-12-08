"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAuth } = useAuth();
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const res = await api.post("/auth/login", { email, password });
            setAuth(res.data.user, res.data.accessToken);
            router.push("/dashboard");
        } catch (err) {
            alert("Invalid credentials");
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
            <input placeholder="password" type="password"
                value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
