
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAuth } = useAuth();
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const res = await api.post("/auth/register", { name, email, password });
            setAuth(res.data.user, res.data.accessToken);
            router.push("/dashboard");
        } catch (err) {
            alert("Invalid credentials");
        }
    };

    return (
        <div>
            <h1 className="text-3xl mb-4">Register</h1>
            <input
                className="p-3 mb-2 border"
                placeholder="name" value={name} onChange={e => setName(e.target.value)} />
            <br />
            <input
                className="p-3 mb-2 border"
                placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
            <br />

            <input
                className="p-3 mb-2 border"
                placeholder="password" type="password"
                value={password} onChange={e => setPassword(e.target.value)} />
            <br />
            <button
                className="border px-8 py-3"
                onClick={handleLogin}>Register</button>
        </div>
    );
}
