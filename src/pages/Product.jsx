import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import productData from '../api/productsApi'

import Helmet from '../components/helmet/Helmet'
import Section, { SectionTitle, SectionBody } from '../components/section/Section'
import Grid from '../components/grid/Grid'


import ProductCard from '../components/product-card/ProductCard'
import ProductView from '../components/product-view/ProductView'

const Product = () => {

    const { slug } = useParams();
    // console.log(slug)
    const product = productData.getProductBySlug(slug);
    // console.log(product)
    const relatedProduct = productData.getProducts(8);

    useEffect(() => {
        window.scrollTo(0, 0);
    },[product])

    return (
        <Helmet title={product.name}>
            <Section>
                <SectionBody>
                    <ProductView product={product} />
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>Related Products</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={30}>
                        {
                            relatedProduct.map(item => (
                                <ProductCard key={item.id} data={item} />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    );
};

export default Product;
