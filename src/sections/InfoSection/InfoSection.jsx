import AOS from 'aos';
import React from 'react'
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import "../InfoSection/InfoSection.css"
import Correct from "/src/assets/correct.png"
import Expensis from "/src/assets/expenses.avif"
import GroupBills from "/src/assets/group-bills.avif"
import MonthlySummary from "/src/assets/monthly-summary.avif"

export default function InfoSection() {
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
        <section className='info-section'>
            <div className='monthly-summary'>
                <div className='monthly-txt'>
                    <h2 data-aos="fade-up">
                        Check out your monthly summary with a glance.
                    </h2>
                    <p data-aos="fade-up">
                        Vivamus facilisis, neque sit amet venenatis euismod, neque viverra velit, sit amet vehicula sapien elit eget tortor.
                    </p>
                </div>
                <img src={MonthlySummary} alt="monthly-summary" data-aos="flip-down" />
            </div>
            <div className='expenses' data-aos-duration="1000" data-aos="fade-up">
                <img src={Expensis} alt="expensis" data-aos="flip-down" />
                <div className='expenses-txt'>
                    <h2 data-aos="fade-up">
                        Control your expenses and save money.
                    </h2>
                    <p data-aos="fade-up">
                        Vivamus facilisis, neque sit amet venenatis euismod, neque viverra velit, sit amet vehicula sapien elit eget tortor.
                    </p>
                    <ul>
                        <li data-aos="fade-up">
                            <img src={Correct} alt="correct" />
                            Molestie eget non libero viverra vitae nibh.
                        </li>
                        <li data-aos="fade-up">
                            <img src={Correct} alt="correct" />

                            Aliquam in sollicitudin sem.
                        </li>
                    </ul>
                </div>
            </div>
            <div className='group-bills' data-aos="fade-up">
                <div className='group-txt'>
                    <h2 data-aos="fade-up">
                        Group bills? No problem, you can split it.
                    </h2>
                    <p data-aos="fade-up">
                        Vivamus facilisis, neque sit amet venenatis euismod, neque viverra velit, sit amet vehicula sapien elit eget tortor.
                    </p>
                </div>
                <img src={GroupBills} alt="groupb-bill" data-aos="flip-down" />
            </div>
        </section>
    )
}
