import { Request, Response } from "express";
import User from "../models/user.model";
import { hashPassword, comparePassword } from "../utils/hash.util";
import { generateAccessToken, generateRefreshToken } from "../services/token.service";
import jwt from "jsonwebtoken";


export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        let exist = await User.findOne({ email });
        if (exist) return res.status(400).json({ message: "Email already registered" });

        const hashed = await hashPassword(password);

        const user = await User.create({ name, email, password: hashed });

        const accesToken = generateAccessToken(user._id.toString(), user.email);
        const refreshToken = generateRefreshToken(user._id.toString());

        // Seting refresh token as secure HttpOnly cookie
        res.cookie("jid", refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            path: "/api/auth/refresh"
        });

        return res.status(201).json({
            message: "User registered",
            accesToken,
            user: { id: user._id, name: user.name, email: user.email }
        })

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}


export const login = async (req: Request, res: Response) => {
    console.log(req, res)
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ message: "Invalid credentials or user not exists" })
        const match = await comparePassword(password, user.password);
        if (!match) return res.status(400).json({ message: "Invalid credentials" });

        const accessToken = generateAccessToken(user._id.toString(), user.email);
        const refreshToken = generateRefreshToken(user._id.toString());

        res.cookie("jid", refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            path: "/api/auth/refresh"
        });

        return res.json({
            message: "Logged in",
            accessToken,
            user: { id: user._id, name: user.name, email: user.email }
        });

    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
}

export const refresh = (req: Request, res: Response) => {
    const token = req.cookies.jid;
    if (!token) return res.status(401).json({ message: "No refresh token" });

    try {
        const payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET as string) as any;
        const accessToken = generateAccessToken(payload.id, payload.email);
        return res.json({ accessToken });
    } catch (error) {
        return res.status(403).json({ message: "Invalid refresh token" });
    }
}

export const me = async (req: any, res: Response) => {
    const user = await User.findById(req.user.id).select("-password");
    return res.json({ user });
};

export const logout = async (req: Request, res: Response) => {
    res.cookie("jid", "", {
        httpOnly: true,
        expires: new Date(0)
    });
    res.json({ message: "Logged out" });
};
