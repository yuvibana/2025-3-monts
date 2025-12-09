import jwt, { SignOptions } from "jsonwebtoken";
import type { StringValue } from "ms";

export const generateAccessToken = (id: string, email: string) => {
    const expiresIn = (process.env.ACCESS_EXPIRE || "1m") as StringValue;

    const options: SignOptions = {
        expiresIn
    };

    return jwt.sign(
        { id, email },
        process.env.JWT_ACCESS_SECRET as string,
        options
    );
};

export const generateRefreshToken = (id: string) => {
    const expiresIn = (process.env.REFRESH_EXPIRE || "1d") as StringValue;

    const options: SignOptions = {
        expiresIn
    };

    return jwt.sign(
        { id },
        process.env.JWT_REFRESH_SECRET as string,
        options
    );
};
