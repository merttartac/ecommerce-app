import React from 'react';
//Styles
import Grid from '../helpers/Grid';
import ProductCard from './../product-card/ProductCard';
import NotFound from './../../pages/not-found/NotFound';

const ProductsGrid = ({ products, productsStatus }) => {

    let content;
    if (productsStatus === 'loading') {
        content = <h1>Loading...</h1>
    } else if (productsStatus === 'succeeded') {
        content = products.map(product => (
            <ProductCard key={product._id} product={product}/>
        ));
    } else if (productsStatus === 'failed') {
        content = (
            <NotFound/>
        )
    }

    return (
        <Grid header='Products'>
            {content}
        </Grid>
    )
}

export default ProductsGrid;