import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");

function ThemeToggler() {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}

export default function Index() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeToggler />
      <button onClick={() => setTheme(t => (t === "light" ? "dark" : "light"))}>
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}
