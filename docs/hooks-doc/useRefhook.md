useRef Hook in React
    useRef creates a mutable object that persists across renders.
    Unlike state, changing a .current value does not trigger a re-render.
    Commonly used for:
        Accessing DOM elements directly.
        Storing mutable values without causing re-renders (like a variable that survives renders).
        Storing previous values for comparison.

const myRef = useRef(initialValue);
    myRef.current holds the value.
    It can be anything — a number, object, array, or even a DOM node.
    
