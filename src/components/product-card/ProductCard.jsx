import React from 'react';
import { Link } from 'react-router-dom';

import './product-card.scss'

import numberWithComas from '../../untils/numberWithCommas'

const ProductCard = props => {
    // console.log(props)
    const { data } = props;

    return (
        <div className='product__card'>
            <div className='product__card__item'>
                <Link to={`/catalog/${data.slug}`}>
                    {/* IMG */}
                    <div className='product__card__item__img'>
                        <img src={data.image.imgAvt} alt=''/>
                    </div>
                    {/* INFO */}
                    <div className='product__card__item__info'>
                        {/* Name */}
                        <h1 className='product__card__item__info__name'>
                            {data.name}
                        </h1>
                        {/* Price */}
                        <p className='product__card__item__info__price'>
                            {numberWithComas(data.price)}&nbsp;đ&nbsp;&nbsp;
                            <del>{numberWithComas(data.discount)}&nbsp;đ</del>
                        </p>
                        {/* Rate */}
                        <div className='product__card__item__info__rate'>
                            {
                                data.evaluate === 1 ? (
                                    <>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bx-star"></i>
                                        <i className="bx bx-star"></i>
                                        <i className="bx bx-star"></i>
                                        <i className="bx bx-star"></i>
                                    </>
                                ) : data.evaluate === 2 ? (
                                    <>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bx-star"></i>
                                        <i className="bx bx-star"></i>
                                        <i className="bx bx-star"></i>
                                    </>
                                ) : data.evaluate === 3 ? (
                                    <>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bx-star"></i>
                                        <i className="bx bx-star"></i>
                                    </>
                                ) : data.evaluate === 4 ? (
                                    <>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bx-star"></i>
                                    </>
                                ) : (
                                    <>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default ProductCard;
