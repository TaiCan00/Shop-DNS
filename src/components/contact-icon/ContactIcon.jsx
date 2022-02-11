import React from 'react'
import PropTypes from 'prop-types'
import './contact-icon.scss'

const ContactIcon = props => {
    return (
        <div className='contact__icon'>
            <div className='contact__icon__item'>
                <a href='https://www.facebook.com/taican.real/' target='_blank'>
                    <i className={`${props.facebook}`}></i>
                </a>
            </div>
            <div className='contact__icon__item'>
                <a href='https://github.com/TaiCan00' target='_blank'>
                    <i className={`${props.github}`}></i>
                </a>
            </div>
            <div className='contact__icon__item'>
                <a href='https://www.instagram.com/' target='_blank'>
                    <i className={`${props.instagram}`}></i>
                </a>
            </div>
            <div className='contact__icon__item'>
                <a href='https://twitter.com/' target='_blank'>
                    <i className={`${props.twitter}`}></i>
                </a>
            </div>
        </div>
    )
}

ContactIcon.propTypes = {
    facebook: PropTypes.string,
    instagram: PropTypes.string,
    github: PropTypes.string,
    twitter: PropTypes.string,
}

export default ContactIcon