import React, { useEffect, useRef } from 'react';

import './scroll-to-top.scss'

const ScrollToTop = () => {

    const btnRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.scrollTop > 70 || document.documentElement.scrollTop > 70) {
                btnRef.current.classList.add('active')
            } else {
                btnRef.current.classList.remove('active')
            }
        })
        window.scrollTo(0,0);
    },[])

    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className='scroll__top'>
            <button className='scroll__top__btn' ref={btnRef} onClick={scrollToTop}>
                <i className='bx bx-chevron-up scroll__top__btn__icon'></i>
            </button>
        </div>
    )
}

export default ScrollToTop