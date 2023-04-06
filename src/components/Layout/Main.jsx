import React from 'react'
import Headers from '../Headers/Headers'
import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    )
}

export default Main