import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import numberWithComas from '../../untils/numberWithCommas';

import { removeItem, updateItem } from '../../redux/cartItemsSlice';

import './cart-item.scss';

const CartItem = props => {


    const dispatch = useDispatch();

    const [item, setItem] = useState(props.item);
    const [quantity, setQuantity] = useState(props.item.e.quantity);
    // console.log(props.item.e);

    const changeQuantity = (type) => {
        if (type === 'PLUS'){
            dispatch(
                updateItem({
                    ...item.e,
                    quantity: quantity + 1,
                })
            )
        } else {
            dispatch(
                updateItem({
                    ...item.e,
                    quantity: quantity - 1 < 1 ? 1 : quantity - 1,
                })
            )
        }
    };

    const removeCartItem = () => {
        dispatch(removeItem(item.e))
    };

    useEffect(() => {
        setItem(props.item);
        setQuantity(props.item.e.quantity);
    },[props.item]);

    return (
        <div className='cart__item'>
            <div className='cart__item__img'>
                <img src={item.product.image.imgAvt} alt=''/>
            </div>
            <div className='cart__item__info'>
                {/* CART ITEM INFO NAME */}
                <div className='cart__item__info__name'>
                    <Link to={`/catalog/${item.e.slug}`}>
                        {`${item.product.name} - ${item.e.color} - ${item.e.capacity}`}
                    </Link>
                </div>
                {/* CART ITEM INFO PRICE */}
                <div className='cart__item__info__price'>
                    {
                        numberWithComas(item.product.price)
                    }
                </div>
                {/* CART ITEM INFO QUANTITY */}
                <div className='cart__item__info__quantity'>
                    <div className='cart__item__info__quantity__btn'
                        onClick={() => changeQuantity('MINUS')}
                    >
                        <i className='bx bx-minus'></i>
                    </div>
                    <div className='cart__item__info__quantity__input'>
                        {quantity}
                    </div>
                    <div className='cart__item__info__quantity__btn'
                        onClick={() => changeQuantity('PLUS')}
                    >
                        <i className='bx bx-plus'></i>
                    </div>
                </div>
                {/* CART ITEM INFO DELETE */}
                <div className='cart__item__info__delete' onClick={() => removeCartItem()}>
                    <i className='bx bx-trash'></i>
                </div>
            </div>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.object,
}

export default CartItem