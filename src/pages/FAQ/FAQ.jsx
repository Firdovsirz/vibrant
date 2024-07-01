import "../FAQ/FAQ.css"
import React from 'react'
import questions from './questions'
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import AOS from "aos"

export default function FAQ() {
    return (
        <>
            <Header />
            <main className='faq-main'>
                <section className='faq-section'>
                    <div className='faq-txt'>
                        <h1 data-aos="fade-down">Frequently asked questions</h1>
                        <p data-aos="fade-down">Contact us via support if you have any more questions.</p>
                    </div>
                    <div className='faq-questions'>
                        {questions.map((item,index)=>{
                            return(
                                <div className='question-container'>
                                    <h3 className='faq-question'  data-aos="fade-down">{item.question}</h3>
                                    <p className='faq-answer' data-aos="fade-up">{item.answer}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
