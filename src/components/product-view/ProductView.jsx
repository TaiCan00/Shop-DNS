import React, { useState } from 'react';
import './product-view.scss'

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import promotion from '../../api/promotion'
import { policyProductView } from "../../api/policy";

import { useUserAuth } from '../../context/UserAuthContext'

import { toast } from 'react-toastify';

import numberWithComas from '../../untils/numberWithCommas'

import Grid from '../grid/Grid'
import Button from '../button/Button'
import Banner from '../banner/Banner'
import PolicyProductView from '../policy-product-view/PolicyProductView'
import SystemProductView from '../system-product-view/SystemProductView'

import { addItem } from '../../redux/cartItemsSlice'

const ProductView = props => {
    
    const { product } = props;

    const [image, setImage] = useState(product.image.img01);
    const [capacity, setCapacity] = useState(undefined)
    const [color, setColor] = useState(undefined)

    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(product.price);

    const [toggleDesc, setToggleDesc] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useUserAuth();

    //Function onclick change images
    const changeImage = (img) => {
        setImage(img);
    }

    //Function onclick change quantity
    const changeQuantity = (type) => {
        if (type === 'PLUS'){
            setQuantity(quantity + 1);
            setPrice(price + product.price);
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
            setPrice(price - product.price < product.price ? product.price : price - product.price);
        }
    }

    //Function check user before add & go to cart
    const checkUser = () => {
        if (!user) {
            alert('Vui lòng đăng nhập để mua hàng');
            navigate('/login');
            return false;
        }
        if (capacity === undefined){
            toast.error('Vui lòng chọn dung lượng');
            return false;
        }
        if (color === undefined) {
            toast.error('Vui lòng chọn màu sắc');
            return false;
        }
        return true;
    } 

    //Function onclick add to cart & go to cart 
    const addToCart = () => {
        if (checkUser()) {
            dispatch(
                addItem({
                    slug: product.slug,
                    color: color,
                    capacity: capacity,
                    quantity: quantity,
                    price: price,
                })
            );
            toast.success('Thêm vào giở hàng thành công.')
        }
    };

    const goToCart = () => {
        if (checkUser()) {
            dispatch(
                addItem({
                    slug: product.slug,
                    color: color,
                    capacity: capacity,
                    quantity: quantity,
                    price: price,
                })
            );
        navigate('/cart')
        }
    };

    return (
        <div className='product'>
            <h1 className='product__view__name'>Điện thoại {product.name}</h1>
            <div className='product__view'> 
                {/* PRODUCT VIEW LEFT */}
                <div className='product__view__left'>
                    <div className='product__view__left__img'>
                        <img src={image} alt='' className='product__view__left__img--avt'/>
                        <div className='product__view__left__img__box'>
                            <img 
                                src={product.image.img04}
                                alt =''
                                onClick= {() => changeImage(product.image.img04)}
                            />
                            <img 
                                src={product.image.img03}
                                alt =''
                                onClick= {() => changeImage(product.image.img03)}
                            />
                            <img 
                                src={product.image.img02}
                                alt =''
                                onClick= {() => changeImage(product.image.img02)}
                            />
                            <img 
                                src={product.image.img01}
                                alt =''
                                onClick= {() => changeImage(product.image.img01)}
                            />
                        </div>
                    </div>
                    <div className='product__view__left__policy'>
                        <Grid col={2} mdCol={2} smCol={1} gap={20}>
                            {
                                policyProductView.map(item => (
                                    <PolicyProductView 
                                        key={item.id}
                                        icon={item.icon}
                                        title={item.description}
                                    />
                                ))
                            }
                        </Grid>
                    </div>
                    {/* IMG DESC */}
                    <img 
                        src={product.image.imgDesc}
                        className='product__view__left__img--desc'
                    />
                </div>
                {/* PRODUCT VIEW RIGHT */}
                <div className='product__view__right'>
                    {/* PRODUCT VIEW RIGHT ITEM - CAPACITY */}
                    <div className='product__view__right__item'>
                        {
                            product.capacity.map((item,index) => (
                                <div
                                    key={index}
                                    className={`product__view__right__item__info 
                                    product__view__right__item__info__capacity
                                    ${item === capacity ? 'active' : ''}`}
                                    onClick={() => setCapacity(item)}
                                >
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                    {/* PRODUCT VIEW RIGHT ITEM - COLORS */}
                    <div className='product__view__right__item'>
                        {
                            product.colors.map((item,index) => (
                                <div
                                    key={index}
                                    className={`product__view__right__item__info 
                                    product__view__right__item__info__color
                                    ${item === color ? 'active' : ''}`}
                                    onClick={() => setColor(item)}
                                >
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                    {/* PRODUCT VIEW RIGHT ITEM - QUANTITY */}
                    <div className='product__view__right__item'>
                        <div className='product__view__right__item__quantity'>
                            <div 
                                className='product__view__right__item__quantity__btn'
                                onClick= {() => changeQuantity('MINUS')}
                            >
                                <i className='bx bx-minus'></i>
                            </div>
                            <div className='product__view__right__item__quantity__input'>
                                {quantity}
                            </div>
                            <div  
                                className='product__view__right__item__quantity__btn'
                                onClick= {() => changeQuantity('PLUS')}
                            >
                                <i className='bx bx-plus'></i>
                            </div>
                        </div>
                    </div>
                    {/* PRODUCT VIEW RIGHT ITEM - PRICE */}
                    <div className='product__view__right__item__price'>
                        {numberWithComas(price)} đ
                    </div>
                    {/* PRODUCT VIEW RIGHT ITEM - TITLE */}
                    <div className='product__view__right__item__title'>
                        Giá tại <span>Hồ Chí Minh</span>
                    </div>
                    {/* BANNER */}
                    <Banner 
                        img="https://cdn.tgdd.vn/2022/01/banner/desk920x230-920x230-9.png"
                        marginBottom={10}
                    />
                    {/* PROMOTION */}
                    <div className='product__view__right__promotion'>
                        <div className='product__view__right__promotion__info'>
                            <div className='product__view__right__promotion__info__title'>
                                Khuyến mãi
                            </div>
                            <div className='product__view__right__promotion__info__desc'>
                                Giá và khuyến mãi dự kiến áp dụng đến 23:00 10/02
                            </div>
                        </div>
                        {
                            promotion.map(item=> (
                                <div
                                    className='product__view__right__promotion__item'
                                    key={item.id}
                                >
                                    <div className='product__view__right__promotion__item__stt'>
                                        {item.id}
                                    </div>
                                    <div className='product__view__right__promotion__item__title'>
                                        {item.title}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* STATUS */}
                    {
                        product.status === 1 ? (
                            <div className='product__view__right__item__status product__view__right__item__status--stock'>
                                Còn hàng
                            </div>
                        ) : (
                            <div className='product__view__right__item__status product__view__right__item__status--outstock'>
                                Hết hàng
                            </div>
                        )
                    }
                    {/* PRODUCT VIEW RIGHT ITEM - ADD & GO TO CART */}
                    <div className='product__view__right__item'>
                        <div className='product__view__right__item__add'>
                            <Button size='sm' onClick = {() => goToCart()}>
                                Mua ngay
                            </Button>
                            <Button size='sm' onClick = {() => addToCart()}>
                                Thêm vào giỏ hàng
                            </Button>
                        </div>
                    </div>
                    {/* SYSTEM PRODUCT VIEW */}
                    <SystemProductView product={product}/>
                    {/* PRODUCT VIEW RIGHT DESC */}
                    <div className='product__view__right__desc'>
                        <div
                            className={`product__view__right__desc__info ${toggleDesc ? 'toggle' : ''}`}
                        >
                            <h3>Thông tin sản phẩm</h3>
                            <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
                        </div>
                        <div className='product__view__right__desc__btn'>
                            <Button size='sm' onClick={() => setToggleDesc(!toggleDesc)}>
                                {toggleDesc ? 'Thu gọn' : 'Xem thêm'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}    

export default ProductView;
