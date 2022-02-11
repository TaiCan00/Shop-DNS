import React from 'react';

import './recent-post.scss'

const RecentPost = props => {

    const { post } = props;

    return (
        <div className='blog__recent__post'>
            <div className='blog__recent__post__item'>
                <div className='blog__recent__post__item__img'>
                    <img src={post.img} />
                </div>
                <div className='blog__recent__post__item__info'>
                    <h2>{post.name}</h2>
                    <p>{post.date}</p>
                </div>
            </div>
        </div>
    );
};

export default RecentPost;
