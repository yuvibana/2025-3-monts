import React from 'react'

export default function Pagination({
    currentPage,
    goToPrevPage,
    noOfPages,
    goToNextPage,
    handlePageChange
}) {
    return (

        <div className='pagination'>
            <button
                disabled={currentPage === 0}
                onClick={() => goToPrevPage()} style={{ padding: '10px' }}>Prev</button>
            {[...Array(noOfPages).keys()].map(n => <span
                className={`pages-number ${currentPage === n && 'active-page-number'}`}
                onClick={() => handlePageChange(n)}
                key={n}>{n + 1}</span>)}
            <button
                disabled={currentPage === noOfPages - 1}
                onClick={() => goToNextPage()} style={{ padding: '10px' }}>Next</button>
        </div>
    )
}
