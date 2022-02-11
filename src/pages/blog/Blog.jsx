import React from 'react';
import './blog.scss'

import blog, { tags, recentPosts, gallery } from '../../api/blog'

import Helmet from '../../components/helmet/Helmet'

import BlogList from '../../components/blog-list/BlogList'

import RecentPost from '../../components/recent-post/RecentPost'

const Blog = () => {
    return (
        <Helmet title='Bài viết'>
            <div className='blog'>
                {/* BLOG LEFT */}
                <div className='blog__left'>
                    {
                        blog.map(item => (
                            <BlogList key={item.id} blog={item}/>
                        ))
                    }
                </div>
                {/* BLOG RIGHT */}
                <div className='blog__right'>
                    {/* Recent post */}
                    <div className='blog__right__item'>
                        <div className='blog__right__item__name blog__recent__name'>
                            Recent Posts
                        </div>
                        {
                            recentPosts.map(item => (
                                <RecentPost post={item} key={item.id}/>
                            )) 
                        }
                    </div>
                    {/* Gallery */}
                    <div className='blog__right__item'>
                        <div className='blog__gallery'>
                            <div className='blog__right__item__name blog__gallery__name'>
                                Gallery
                            </div>
                            <div className='blog__gallery__img'>
                                {
                                    gallery.map((item,index) => (
                                        <img key={index} src={item.img} alt='' />
                                    ))
                                }
                            </div>
                        </div>  
                    </div>
                    {/* Tags */}
                    <div className='blog__right__item'>
                        <div className='blog__tags'>
                            <div className='blog__right__item__name blog__tags__name'>
                                Tags
                            </div>
                            <div className='blog__tags__item'>
                                {
                                    tags.map((item,index) => (
                                        <span key={index}>{item.display}</span>
                                    ))
                                }
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Blog;
