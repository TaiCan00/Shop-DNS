import React from 'react';
import PropTypes from 'prop-types';

import './policy.scss';

const Policy = (props) => {
    return (
        <div className='policy'>
            <div className='policy__icon'>
                <i className={props.icon}></i>
            </div>
            <div className='policy__info'>
                <div className='policy__info__name'>{props.name}</div>
                <div className='policy__info__description'>{props.description}</div>
            </div>
        </div>
    );
};

Policy.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    icon: PropTypes.string,
};

export default Policy;
