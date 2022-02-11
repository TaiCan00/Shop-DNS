import React from 'react';

import Helmet from '../components/helmet/Helmet'
import Section, { SectionBody, SectionTitle } from '../components/section/Section'

import Grid from '../components/grid/Grid'
import Slider from '../components/slider/Slider'

import Policy from '../components/policy/Policy'
import policy from '../api/policy'

import ProductCard from '../components/product-card/ProductCard';
import productData from '../api/productsApi'

import Banner from '../components/banner/Banner'

const Home = () => {
    return (
        <Helmet title='Trang chủ'>
            <Slider/>
            {/* Section Grid & Policy */}
            <Section>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={30}>
                        {
                            policy.map((item,index) => (
                                <Policy 
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* Section Grid & Product card NEW*/}
            <Section>
                <SectionTitle>Product New</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={30}>
                        {
                            productData.getProducts(4).map((item) => (
                                <ProductCard key={item.id} data={item}/>
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* Section Grid & Product card SELLING*/}
            <Section>
                <SectionTitle>Product Selling</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={30}>
                        {
                            productData.getProducts(4).map((item) => (
                                <ProductCard key={item.id} data={item}/>
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* Banner */}
            <Banner 
                img='https://www.viettablet.com/images/promo/47/tra-gop-0_-lai-suot-trong-3-thang-mobi-banner-viettablet.jpg'
                marginBottom={20}
            />
            {/* Section Grid & Product card RELATED*/}
            <Section>
                <SectionTitle>Product Related</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={30}>
                        {
                            productData.getProducts(8).map((item) => (
                                <ProductCard key={item.id} data={item}/>
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* Banner */}
            <Banner img="https://img4.thuthuatphanmem.vn/uploads/2020/06/26/hinh-anh-banner-dien-may-thong-minh_033705387.png" 
            />
        </Helmet>
    );
};

export default Home;
