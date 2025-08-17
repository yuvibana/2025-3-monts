import React, { useState, useTransition } from 'react'

const bigList = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`)


export default function Index() {
    const [querey, setQuerey] = useState('');
    const [filtered, setFiltered] = useState(bigList);
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        const value = e.target.value;
        setQuerey(value);

        startTransition(() => {
            const result = bigList.filter((item) =>
                item.toLowerCase().includes(value.toLowerCase()))
            setFiltered(result);
        })
    }

    return (
        <div>
            <h1>useTransition Hook</h1>
            <input
                type="text"
                value={querey}
                placeholder="Search..."
                onChange={handleChange}
                style={{ width: '300px', padding: '10px', marginBottom: '20px' }}
            />
            {isPending && <p style={{ color: "gray" }}>Updating list...</p>}
            <ul>
                {
                    filtered && filtered.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}
