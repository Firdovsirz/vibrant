import React from 'react'
import "../Footer/Footer.css"

export default function Footer() {
    return (
        <footer>
            <div className='footer-info'>
                <p>vibrant.</p>
                <ul>
                    <li>Home</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='footer-desc'>
                <p>Vibrant is a Framer template made for Saas companies</p>
                <form action="">
                    <label htmlFor="email">
                        <input type="email" placeholder='Your e-mail address' />
                    </label>
                    <button type='submit'>Subscribe</button>
                </form>
            </div>
        </footer>
    )
}
