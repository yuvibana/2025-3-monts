import React, { useRef } from 'react'

export default function Index() {
    const inputRef = useRef(null);

    // useRef is used to directly access a DOM element
    // Here, we are using it to focus an input field when a button is clicked
    // This avoids the need for state management for this simple interaction

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus(); // Direct DOM manipulation
        }
    }

    return (
        <div className="p-4">
            <input
                ref={inputRef}
                type="text"
                placeholder="Click button to focus me"
                className="border p-2"
            />
            <button
                onClick={handleFocus}
                className="ml-2 bg-blue-500 text-white px-3 py-1 rounded"
            >
                Focus Input
            </button>
        </div>
    )
}
