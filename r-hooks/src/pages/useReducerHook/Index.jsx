import React, { useReducer } from 'react'

function counterReducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

export default function Index() {

    const [state, dispatch] = useReducer(counterReducer, { count: 0 })

    return (
        <div>
            <button
                onClick={() => dispatch({ type: "decrement" })}
            >-</button>
            {state.count}
            <button onClick={() => dispatch({ type: "increment" })}
            >+</button>
        </div >
    )
}
