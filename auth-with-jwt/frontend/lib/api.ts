import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000/api",
    withCredentials: true, // send refresh token cookie
});

// request interceptor (AuthProvider will inject token)
export const attachToken = (token: string | null) => {
    api.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : "";
};

// response interceptor for auto-refresh
api.interceptors.response.use(
    (res) => res,
    async (err) => {
        const original = err.config;

        if (err.response?.status === 401 && !original._retry) {
            original._retry = true;

            try {
                const res = await api.get("/auth/refresh", {
                    withCredentials: true
                });

                const newToken = res.data.accessToken;

                // update axios default header
                api.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;

                // retry original request
                original.headers.Authorization = `Bearer ${newToken}`;
                return api(original);
            } catch (e) {
                console.log("Auto refresh failed");
            }
        }
        return Promise.reject(err);
    }
);

export default api;

export const refreshAccessToken = async () => {
    try {
        const res = await fetch("http://localhost:4000/api/auth/refresh", {
            method: "GET",
            credentials: "include"
        });

        const data = await res.json();
        return data.accessToken || null;
    } catch (error) {
        return null;
    }
};
