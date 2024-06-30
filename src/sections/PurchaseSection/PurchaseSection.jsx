import AOS from 'aos';
import React from 'react'
import 'aos/dist/aos.css'
import Correct from "/src/assets/correct.png"
import "../PurchaseSection/PurchaseSection.css"
import { useEffect } from 'react';

export default function PurchaseSection() {
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
        <section className='purchase-section'>
            <h2>Ready to get started?</h2>
            <p>Choose a plan fits your needs.</p>
            <div className='purchase-methods' data-aos="zoom-in">
                <div className='personal'>
                    <h3>Personal</h3>
                    <p>Best for brands that need designs on an ongoing basis.</p>
                    <p className='personal-amount'><span>$2.99</span>/mo</p>
                    <button>Try for Free</button>
                    <ul>
                        <li>
                            <img src={Correct} alt="correct" style={{ width: 30, height: 30 }} />
                            Request unlimited designs
                        </li>
                        <li>
                            <img src={Correct} alt="correct" style={{ width: 30, height: 30 }} />
                            Deliverables as-you-need
                        </li>
                        <li>
                            <img src={Correct} alt="correct" style={{ width: 30, height: 30 }} />
                            No limit on revisions
                        </li>
                    </ul>
                </div>
                <div className='business'>
                    <h3>Business</h3>
                    <p>Best for brands that need designs on an ongoing basis.</p>
                    <p className='business-amount'><span>$8.99</span>/mo</p>
                    <button>Try for Free</button>
                    <ul>
                        <li>
                            <img src={Correct} alt="correct" style={{ width: 30, height: 30 }} />
                            Request unlimited designs
                        </li>
                        <li>
                            <img src={Correct} alt="correct" style={{ width: 30, height: 30 }} />
                            Deliverables as-you-need
                        </li>
                        <li>
                            <img src={Correct} alt="correct" style={{ width: 30, height: 30 }} />
                            No limit on revisions
                        </li>
                        <li>
                            <img src={Correct} alt="correct" style={{ width: 30, height: 30 }} />
                            No code needed
                        </li>
                        <li>
                            <img src={Correct} alt="correct" style={{ width: 30, height: 30 }} />
                            İndividual help center
                        </li>
                        <li>
                            <img src={Correct} alt="correct" style={{ width: 30, height: 30 }} />
                            Your personal mentor
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    )
}
