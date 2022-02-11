import React from 'react';
import PropTypes from 'prop-types';

import './button.scss'

const Button = (props) => {

    const bg = props.backgroundColor ? `bg-${props.backgroundColor}` : 'bg-main';
    const size = props.size ? `btn-${props.size}` : '';

    return (
        <button
            className={`btn ${bg} ${size}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            <span className='btn__txt'>{props.children}</span>
            {
                props.icon ? (
                    <span className='btn__icon'>
                        <i className={`${props.icon} bx-tada`}></i>
                    </span>
                ) : null
            }
        </button>
    );
};

Button.propTypes = {
    backgroundColor: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;
