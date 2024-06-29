import React from 'react'
import "../Header/Header.css"


export default function Header() {
    return (
        <header>
            <nav>
                <div className='logo-text'>
                    vibrant
                </div>
                <div className='nav-pages'>
                    <ul>
                        <li>Home</li>
                        <li>FAQ</li>
                        <li>Blog</li>
                    </ul>
                    <button>Get for Free</button>
                </div>
            </nav>
        </header >
    )
}
