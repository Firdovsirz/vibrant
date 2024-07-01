import React from 'react';
import "../Header/Header.css";
import { Routes, Route, Link } from 'react-router-dom';
import FAQ from '../../pages/FAQ/FAQ';
import Home from '../../pages/Home/Home';
import { useEffect, useState } from 'react';

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`header ${isSticky ? 'sticky' : ''}`}>
                <nav className='nav-menu'>
                    <div className='logo-text'>
                        vibrant
                    </div>
                    <div className='nav-pages'>
                        <ul>
                            <li className={`list-element ${isSticky ? 'colored-list' : ''}`}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={`list-element ${isSticky ? 'colored-list' : ''}`}>
                                <Link to="/faq">FAQ</Link>
                            </li>
                            <li className={`list-element ${isSticky ? 'colored-list' : ''}`}>Blog</li>
                        </ul>
                        <button>Get for Free</button>
                    </div>
                </nav>
            </header>
        </>
    );
}
