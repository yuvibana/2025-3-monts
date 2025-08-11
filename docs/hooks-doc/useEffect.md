1. What is useEffect?
    useEffect lets you run side effects in functional components.
    A "side effect" is anything that affects something outside the current function, like:

    Fetching data from an API
    Subscribing to events
    Setting up timers
    Manually changing the DOM

    It’s the replacement for:
    componentDidMount
    componentDidUpdate
    componentWillUnmount

2. Syntax
    useEffect(()=>{
        // side effect code
        return () => {
            // cleanup code (optional)
        };
    },[dependency])

    Arguments:
    Effect function → runs after render.
    Dependencies array → controls when the effect runs.

3. When Does It Run?
    No dependencies ([]) → Runs once on mount.
    With dependencies ([var]) → Runs when those variables change.
    No array → Runs after every render (not common in practice).

    import { useEffect, useState } from "react";

    export default function FetchUser() {
        const [user, setUser] = useState(null);

        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(res => res.json())
            .then(data => setUser(data));
        }, []); // Runs only on mount

        return user ? <p>{user.name}</p> : <p>Loading...</p>;
    }


5. Example – Run When State Changes

    useEffect(() => {
    console.log(`Count changed: ${count}`);
    }, [count]);

6. Cleanup Function
    Some side effects need cleanup (like event listeners, subscriptions, timers).
    useEffect(() => {
    const handleResize = () => console.log(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize); // cleanup
    };
    }, []);

** When to Use useEffect **
    API requests
    Event listeners (keyboard, resize, scroll)
    Timers & intervals
    Logging/debugging
    Cleanup tasks when component unmounts

