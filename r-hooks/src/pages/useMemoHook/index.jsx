import React from 'react'
import WithoutUseMemo from "./withOutMemo"
import WithMemo from "./withMemo"

/*
    This file is part of the r-hooks project.
    we have two components here:
    1. WithoutUseMemo - A component that does not use useMemo hook.
    2. WithMemo - A component that uses useMemo hook.
    The purpose of this file is to demonstrate the difference between using and not using useMemo hook.
    The WithoutUseMemo component will re-calculate the result every time the count changes, while the WithMemo component will only re-calculate the result when the count changes.
*/

export default function index() {
    return (
        <div style={{textAlign: 'center'}}>
            <h3>WithoutUseMemo</h3>
            <div
                style={{ border: '1px solid black', padding: '10px', margin: '10px' }}
            >
                <WithoutUseMemo />
            </div>
            <h3>WithoutUseMemo</h3>
            <div
                style={{ border: '1px solid black', padding: '10px', margin: '10px' }}
            >
                <WithMemo />
            </div>
        </div>
    )
}
