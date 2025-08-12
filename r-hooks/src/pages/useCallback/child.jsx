import React, { useEffect, useState } from 'react'

function Child({ getCount }) {

    // useEffect(() => {
    //     console.log('Child component mounted!');
    // }, [])

    useEffect(() => {
        console.log('Child component mounted!');
    }, [getCount]);

    return (
        <div>
            <h3>{getCount()}</h3>
        </div>
    )
}


export default React.memo(Child);
