
import React, { useLayoutEffect, useRef, useState } from 'react'

// Real-World Example
// Scenario: You have a chat app. When a new message is added, you want the scroll position to instantly jump to the bottom before the paint so the user doesn’t see a flicker.

export default function Index() {

    const [messages, setMessages] = useState(["Hello", "Hi"]);
    const conatinerRef = useRef(null);


    useLayoutEffect(() => {
        const container = conatinerRef.current;
        container.scrollTop = container.scrollHeight;
        // This ensures that the scroll position is set before the browser paints
        // the new messages, preventing any flicker.
    }, [messages])

    return (
        <div ref={conatinerRef}
            style={{
                height: "150px",
                overflowY: "auto",
                border: "1px solid #ccc",
                padding: "10px"
            }}>
            {messages.map((message, index) => (
                <div key={index}>{message}</div>
            ))}
            <button
                onClick={() => setMessages([...messages, `New message ${messages.length + 1}`])}
            >
                Add Message
            </button>
        </div>
    )
}
