import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout({ children }) {
    return (
        <>
            <Outlet />
            <div>{
                // children
            }</div>
        </>
    )
}
