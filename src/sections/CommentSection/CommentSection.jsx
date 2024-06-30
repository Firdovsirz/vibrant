import AOS from 'aos';
import React from 'react'
import 'aos/dist/aos.css'
import comments from './comments'
import { useEffect } from 'react';
import "../CommentSection/CommentSection.css"

export default function CommentSection() {
    const comments1To3 = comments.filter((item, index) => index < 3);
    const comments3To6 = comments.filter((item, index) => index >= 3 && index < 6);
    const comments6To9 = comments.filter((item, index) => index >= 6);
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
        <section className='comment-section'>
            <h2>What people say</h2>
            <div className='comments-container'>
                <div className='comment-1-3' data-aos="fade-up" data-aos-duration={1000}>
                    {comments1To3.map((element, index) => {
                        return (
                            <div className='comment-container' key={index}>
                                <div className='comment-user-info'>
                                    <img src={element.image} alt="profile" style={{ width: 50, height: 50, borderRadius: "50%" }} />
                                    <div>
                                        <h3>{element.name}</h3>
                                        <p className='comment-job-title'>{element.jobTitle}</p>
                                    </div>
                                </div>
                                <p className='comment-desc'>{element.commentDesc}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='comment-3-6' data-aos="fade-up" data-aos-duration={2000}>
                    {comments3To6.map((element, index) => {
                        return (
                            <div className='comment-container' key={index}>
                                <div className='comment-user-info'>
                                    <img src={element.image} alt="profile" style={{ width: 50, height: 50, borderRadius: "50%" }} />
                                    <div>
                                        <h3>{element.name}</h3>
                                        <p className='comment-job-title'>{element.jobTitle}</p>
                                    </div>
                                </div>
                                <p className='comment-desc'>{element.commentDesc}</p>
                                <p className='comment-desc-second'>{element.commentDesc2}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='comment-6-9' data-aos="fade-up" data-aos-duration={3000}>
                    {comments6To9.map((element, index) => {
                        return (
                            <div className='comment-container' key={index}>
                                <div className='comment-user-info'>
                                    <img src={element.image} alt="profile" style={{ width: 50, height: 50, borderRadius: "50%" }} />
                                    <div>
                                        <h3>{element.name}</h3>
                                        <p className='comment-job-title'>{element.jobTitle}</p>
                                    </div>
                                </div>
                                <p className='comment-desc'>{element.commentDesc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
