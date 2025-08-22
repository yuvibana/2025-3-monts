What is useId?
    A hook introduced in React 18.
    Genrate a unique Stable Id String that is the same across the serve and client (important for SSR, like in Next.js).
    Useful when you need accessible IDs for inputs, labels, or aria attributes.
    Unlike random IDs (Math.random()), useId guarantees consistency between renders and environments.
    Unlike random IDs (Math.random()), useId guarantees, consistency b/w renders and environments.

    const id = useId(); 
    
    Returns a unique string, e.g., "react-aria123-4".
    Stays the same across re-renders.