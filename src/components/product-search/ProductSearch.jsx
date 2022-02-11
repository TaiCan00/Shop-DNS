import React, { useRef, useEffect, useState } from 'react';
import Grid from '../grid/Grid'
import ProductCard from '../product-card/ProductCard'

const ProductSearch = props => {

    const listRef = useRef(null)

    const [data, setData] = useState(props.product)
    console.log(data)
    useEffect(() => {
        setData(props.product);
    },[props.product])

    return (
        <div ref={listRef}>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {
                data
                .filter((val) => {
                    if (props.searchItem === ''){
                        return val;
                    } else if (val.name.toLowerCase().includes(props.searchItem.toLowerCase())) {
                        return val;
                    }
                })
                .map((item) => (
                    <ProductCard key={item.id} data={item}/>
                ))
            }
            </Grid>
        </div>
    );
};


export default ProductSearch;
