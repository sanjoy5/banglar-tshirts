import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Headers = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default Headers