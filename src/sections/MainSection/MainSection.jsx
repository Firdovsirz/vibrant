import AOS from 'aos'
import React from 'react'
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import "../MainSection/MainSection.css"
import EastIcon from '@mui/icons-material/East'
import MainBoard from "/src/assets/main-board.avif"
import BillUser1 from "/src/assets/bill-user-1.avif"
import BillUser2 from "/src/assets/bill-user-2.avif"
import BillUser3 from "/src/assets/bill-user-3.avif"

export default function MainSection() {
    const billUsers = [BillUser1, BillUser2, BillUser3];
    useEffect(() => {
        AOS.init({
            duration: 1000, // Customize the duration of animations (in milliseconds)
            once: false, // Animation should happen every time on scroll
            mirror: true, // Allow animations to occur when scrolling past the element
        });

        // Refresh AOS to detect new elements
        AOS.refresh();
    }, []);
    return (
        <section className='main-section'>
            <div className='main-txt-container'>
                <h1 className='main-heading-txt' data-aos="fade-down">Open your first crypto wallet, right now!</h1>
                <p className='main-txt' data-aos="fade-up">Vibrant is the best software platform to easily capture user feed back for your brand and products.</p>
                <button data-aos="zoom-in">
                    Get for Free
                    <EastIcon className='linear-arrow' style={{ color: "#fff" }} />
                </button>
            </div>
            <div className='main-board'>
                <img src={MainBoard} alt="" data-aos="flip-down" />
                <div className='board-savings' data-aos="flip-up">
                    <p>Savings</p>
                    <p className='amount'>$2,380.00</p>
                    <div>
                        <div className='saving-dot' />
                        <div className='saving-line' />
                    </div>
                </div>
                <div className='board-bills'>
                    <div className='bill-users'>
                        <p>Split bills</p>
                        <div className='bill-user-images'>
                            {billUsers.map((item, index) => {
                                return (
                                    <img src={item} alt="user" key={index} style={{ borderRadius: "50%", width: 35, height: 35, marginLeft: "-15px" }} />
                                )
                            })}
                        </div>
                    </div>
                    <p className="bill-amount">$800.00</p>
                    <div className='bill-lines' data-aos="flip-down">
                        <div className='bill-line' data-aos="fade-up" />
                        <div className='bill-dot' data-aos="flip-down" />
                    </div>
                </div>
            </div>
        </section>
    )
}
