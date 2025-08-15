import React, { useImperativeHandle } from 'react'

export default function FancyInput({ ref }) {

    const [inputvalue, setInputValue] = React.useState('');
    const inputRef = React.useRef(null);

    useImperativeHandle(ref, () => {
        return {
            focus: () => {
                inputRef.current.focus();
            },
            clear: () => {
                setInputValue('');
            }
        };
    })


    return (
        <div>
            <input
                ref={inputRef}
                type='text'
                value={inputvalue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    )
}
