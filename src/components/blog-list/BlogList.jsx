import React from 'react';
import './blog-list.scss'

const BlogList = props => {

    const { blog } = props;

    return (
        <div className='blog__list'>
            <div className='blog__list__item'>
                {/* IMG */}
                <div className='blog__list__item__img'>
                    <img src={blog.image.imgBlog} />
                </div>
                {/* INFO */}
                <div className='blog__list__item__info'>
                    {/* STATUS */}
                    <span className='blog__list__item__info__status'>
                        {
                            blog.status === 1 ? (
                                <span className='blog__list__item__info__status--new'>New</span>
                            ) : (
                                <span className='blog__list__item__info__status--old'>Old</span>
                            )
                        }
                    </span>
                    {/* NAME */}
                    <h1 className='blog__list__item__info__name'>{blog.name}</h1>
                    {/* DESCRIPTION */}
                    <div className='blog__list__item__info__desc'>{blog.desc}</div>
                    {/* USER */}
                    <div className='blog__list__item__info__user'>
                        <div className='blog__list__item__info__user__info'>
                            <img src={blog.image.imgUser} alt='' />
                            <h2>{blog.user}</h2>
                        </div>
                        <div className='blog__list__item__info__user__date'>
                            {blog.date}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BlogList;
