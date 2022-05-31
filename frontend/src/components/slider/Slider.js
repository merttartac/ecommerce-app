import React, { useState, useEffect } from 'react';
//Styles
import { Wrapper, Content, Image, Description, SlideThumbnails } from './Slider.styles';

const Slider = ({ products }) => {

    const [slideIndex, setSlideIndex] = useState(0);
    const [current, setCurrent] = useState(null);
    const [orderedProducts, setOrderedProducts] = useState(null);
    const [hover, setHover] = useState(false);

    useEffect(() => {
        const orderedProducts = products && products.slice().sort((a, b) => {
            return b.rating.rate - a.rating.rate;
        });

        setOrderedProducts(orderedProducts);
    }, [products]);

    useEffect(() => {
        let index = slideIndex;
        if (!hover) {
            setCurrent(orderedProducts && orderedProducts[slideIndex])
            setTimeout(() => {
                index++
                setSlideIndex(index);
            }, 5000)
            setCurrent(orderedProducts && orderedProducts[slideIndex]);
    
            if (index === 10) setSlideIndex(0);
        }
    }, [slideIndex, orderedProducts, hover]);

    const onThumbHover = (product, index) => {
        setHover(true);
        setCurrent(product);
        setSlideIndex(index);
    };


    return (

        <Wrapper onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <Content>
                <Image>
                    <img src={current && current.image} alt="product_slide" />
                </Image>

                <Description>
                    <h4>{current && current.title}</h4>
                    <h5>{current && current.description}</h5>
                    <span>$ {current && current.price}</span>
                </Description>
            </Content>

            <SlideThumbnails>
                {orderedProducts && orderedProducts.map((product, index) => {
                    if (index < 10) {
                        return <img src={product.image} onMouseOver={() => onThumbHover(product, index)} onMouseOut={() => setHover(false)} alt="product-thumb"/>
                    } else {
                        return null;
                    }
                        
                })}
            </SlideThumbnails>
        </Wrapper>
    )
}

export default Slider;