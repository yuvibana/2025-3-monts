import React, { useEffect, useSyncExternalStore } from 'react'

// Scenario: You want your app to react to browser’s online/offline status (which lives outside React).

function subscribeFunc(callback) {
    window.addEventListener("online", callback);
    window.addEventListener("offline", callback);
    return () => {
        window.removeEventListener("online", callback);
        window.removeEventListener("offline", callback);
    }
};

function getSnapshotFunc() {
    return navigator.onLine;
};

export default function Index() {
    const isOnline = useSyncExternalStore(subscribeFunc, getSnapshotFunc);

    return (
        <div
            style={{
                padding: "10px",
                color: "white",
                backgroundColor: isOnline ? "green" : "red",
            }}
        >
            {isOnline ? "Online" : "Offline"}
        </div>
    )
}


// Theme Switcher Example


// function useTheme() {
//     const getStoredTheme = () => localStorage.getItem("theme") || "light";

//     const sunscribe = (callback) => {
//         window.addEventListener('storage', callback);
//         return () => {
//             window.removeEventListener('storage', callback);
//         }
//     }

//     const getSnapshot = () => getStoredTheme();
//     return useSyncExternalStore(sunscribe, getSnapshot);
// }

// export default function ThemeSwitcher() {
//     const theme = useTheme();

//     const toggleTheme = () => {
//         const newTheme = theme === 'light' ? 'dark' : 'light';
//         localStorage.setItem('theme', newTheme);
//     };

//     return (
//         <div style={{
//             padding: "10px",
//             backgroundColor: theme === "light" ? "white" : "black",
//             color: theme === "light" ? "black" : "white",
//         }}>
//             <p>Current Theme: {theme}</p>
//             <button
//                 onClick={toggleTheme}
//             >Toggle Theme
//             </button>
//         </div>
//     )
// }