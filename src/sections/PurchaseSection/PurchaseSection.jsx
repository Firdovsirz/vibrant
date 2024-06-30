import React from 'react'
import Correct from "/src/assets/correct.png"
import "../PurchaseSection/PurchaseSection.css"

export default function PurchaseSection() {
    return (
        <section className='purchase-section'>
            <h2>Ready to get started?</h2>
            <p>Choose a plan fits your needs.</p>
            <div className='purchase-methods'>
                <div className='personal'>
                    <h3>Personal</h3>
                    <p>Best for brands that need designs on an ongoing basis.</p>
                    <p className='personal-amount'><span>$2.99</span>/mo</p>
                    <button>Try for Free</button>
                    <ul>
                        <li>
                            <img src={Correct} alt="correct" style={{width: 30, height: 30}}/>
                            Request unlimited designs
                        </li>
                        <li>
                            <img src={Correct} alt="correct" style={{width: 30, height: 30}}/>
                            Deliverables as-you-need
                        </li>
                        <li>
                            <img src={Correct} alt="correct" style={{width: 30, height: 30}}/>
                            No limit on revisions
                        </li>
                    </ul>
                </div>
                <div></div>
            </div>
        </section>
    )
}
