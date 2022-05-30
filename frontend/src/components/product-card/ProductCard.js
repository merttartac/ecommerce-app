import React from 'react';
//Styles
import { Wrapper, Content, Image } from './ProductCard.styles';

const ProductCard = ({ product }) => {
    return (
        <Wrapper>
            <Image>
                <img src={product.image} alt="product_image"/>
            </Image>

            <Content>
                <h6>{product._id}</h6>
                <h5>{product.title}</h5>
                <h2>$ {product.price}</h2>
            </Content>
        </Wrapper>
    )
}

export default ProductCard;