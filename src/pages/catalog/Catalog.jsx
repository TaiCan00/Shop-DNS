import React, { useState } from 'react';
import './catalog.scss'

import productData from '../../api/productsApi'
import categorys from '../../api/category'

import Helmet from '../../components/helmet/Helmet'
import Banner from '../../components/banner/Banner'

import ProductSearch from '../../components/product-search/ProductSearch'
import Pagination from '../../components/pagination/Pagination'

const Catalog = () => {
    
    const productList = productData.getAllProducts()
    // console.log(productList)
    
    const [product, setProduct] = useState(productList)
    // console.log(product)
    const [searchItem, setSearchItem] = useState('')
    
    const [currentPage, setCurrentPage] = useState(1)
    const [productPerPage] = useState(8)
    
    //Get product current page
    const indexOfLastProduct = currentPage * productPerPage;
    // console.log(indexOfLastProduct)
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    // console.log(indexOfFirstProduct)
    const currentProduct = product.slice(indexOfFirstProduct, indexOfLastProduct);
    // console.log(currentProduct)
    
    //Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    // console.log (Math.ceil(product.length / productPerPage) === currentPage)
    //Change current page
    const changeCurrentPage = (type) => {
        if ( type === 'RIGHT') {
            if (Math.ceil(product.length / productPerPage) === currentPage) {
                return setCurrentPage(currentPage);
            } else {
                setCurrentPage(currentPage + 1);
            }
        } else {
            setCurrentPage(currentPage - 1 < 1 ? 1 : currentPage - 1);
        }
    }

    //Filter product
    const filterSelect = item => {
        const productFilter = productList.filter(e => e.categorySlug === item);
        setProduct(productFilter)
    };
    const allProduct = () => {
        setProduct(productList)
    };
    


    return (
        <Helmet title='Sản phẩm'>
            {/* Banner */}
            <Banner 
                img="https://img3.thuthuatphanmem.vn/uploads/2019/10/08/banner-quang-cao-dien-thoai_103211774.jpg"
                marginBottom={30}
            />
            <div className='catalog'>
                {/* Catalog search */}
                <div className='catalog__search'>
                    <input 
                        type='text'
                        placeholder='Search...'
                        onChange={e => setSearchItem(e.target.value)}
                    />
                    <i className='bx bx-search'></i>
                </div>
                {/* Catalog filter */}
                <div className='catalog__filter'>
                    <button onClick={allProduct}>Tất cả</button>
                    {
                        categorys.map((item) => (
                            <button key={item.id}  onClick={() => filterSelect(item.categorySlug)}>
                                {item.display}
                            </button>
                        ))
                    }
                </div>
                {/* Catalog content - Product search */}
                <div className='catalog__content'>
                    <ProductSearch product={currentProduct} searchItem={searchItem}/>
                </div>
                {/* Pagination */}
                <Pagination 
                    productPerPage={productPerPage}
                    totalProduct={product.length}
                    paginate={paginate}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                />
            </div>
        </Helmet>
    );
};

export default Catalog;
