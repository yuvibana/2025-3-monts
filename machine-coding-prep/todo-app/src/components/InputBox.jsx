import React from 'react'

export default function InputBox({ text, setText }) {
    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <input
            placeholder='Enter Task'
            value={text}
            onChange={handleChange}
        />
    )
}
