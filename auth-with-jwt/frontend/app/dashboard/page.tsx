"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function Dashboard() {
    const { user, logout } = useAuth();
    if (!user) return <Link href={"/"}>Login please</Link>;

    return (
        <div className="min-h-svh flex justify-center items-center">
            <div className="text-center">
                <h1 className="pb-6">Welcome {user.name}</h1>
                <button className="py-2 px-7 border pointer"
                    onClick={() => logout()}
                >Logout</button>
            </div>
        </div>
    );
}
