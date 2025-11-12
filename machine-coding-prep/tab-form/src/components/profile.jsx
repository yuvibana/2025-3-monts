import React from 'react'

export default function Profile({ data, setData, errors }) {
    const { name, email, age } = data;

    const handleDataChange = (e, item) => {
        console.log(item);

        setData(prev => ({
            ...prev,
            [item]: e.target.value,
        }))
    };

    return (
        <div className='profile'>
            <div>
                <label>Name :</label>
                <input
                    type='text'
                    placeholder='name'
                    value={name}
                    onChange={(e) => handleDataChange(e, "name")}
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>
            <div>
                <label>Email :</label>
                <input
                    type='text'
                    placeholder='email'
                    value={email}
                    onChange={(e) => handleDataChange(e, "email")}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div>
                <label>Age :</label>
                <input
                    type='number'
                    placeholder='age'
                    value={age}
                    onChange={(e) => handleDataChange(e, "age")}
                />
                {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
            </div>
        </div>
    )
}
