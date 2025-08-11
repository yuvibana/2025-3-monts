import React, { useState } from 'react'

export default function Index() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>useState Hook Example</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>

                <button
                    onClick={() => setCount(count - 1)}
                >-</button>
                <h4>{count}</h4>
                <button
                    onClick={() => setCount(count + 1)}
                >+</button>
            </div>
        </div>
    )
}
