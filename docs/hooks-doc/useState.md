# =================== // useState // ==================== //

1. What is useState?
    useState is a hook that lets you add state to fuctional components.
    Befor hooks, state was only possible in class based components.

2. Syntax
    const [state, setState] = useState(initialValue);
    state → the current value.
    setState → function to update the value.
    initialValue → the default starting value (can be primitive, object, array, or function).

3. Basic Example
    mport { useState } from "react";
    export default function Counter() {
        const [count, setCount] = useState(0);

        return (
            <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        );
    }


4. Updating State
    React schedules state updates — never mutate the state directly.
    setCount(count + 1); // 👍
    count++; // ❌
    
4. Functional Updates
    If your new state depends on the previous state, use the functional form:
    setCount(prev => prev + 1);
6. Using Objects in State
    When storing objects, spread the previous state to avoid losing properties.
    const [user, setUser] = useState({ name: "John", age: 25 });
    setUser(prev=> ({...prev, age: prev.age+1 }))

7. Using Arrays in State
    const [items, setItems] = useState(["Apple", "Banana"]);
    setItems(prev => [...prev,"cherry"])
    


# =================== // useState // ==================== //