import React from 'react'
import InputBox from './InputBox'

export default function TaskFrom({
    handleSubmit,
    text,
    setText,
}) {
    return (
        <form
            onSubmit={handleSubmit}
        >
            <div className='inWrapper'>
                <InputBox
                    text={text}
                    setText={setText}
                />
                <button>submit</button>
            </div>
        </form>
    )
}
