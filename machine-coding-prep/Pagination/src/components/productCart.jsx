import React from 'react'

export default function ProductCart({ data }) {
    const { id, title, images } = data;

    return (
        <div
            style={{ textAlign: "center", border: "1px solid #ddd", }}>
            <img
                src={images[0]}
                alt={title}
                width={120}
            />
            <h2 className='title'>{title}</h2>
        </div>
    )
}
