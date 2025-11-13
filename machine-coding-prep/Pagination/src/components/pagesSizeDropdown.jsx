import React from 'react'

export default function PagesSizeDropdown({
    setPageSize
}) {

    const handleChange = (e) => {
        setPageSize(e.target.value)
    }
    return (
        <div>
            <select value={pageSize} onChange={handleChange}>
                <option value="" disabled>Show items per page</option>
                <option value={10}>10</option>
                <option value={30}>30</option>
                <option value={50}>50</option>
            </select>
        </div>
    )
}
