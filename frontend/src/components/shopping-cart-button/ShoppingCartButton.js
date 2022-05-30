import React from 'react'
import { Wrapper, Content } from './ShoppingCartButton.styles';
import { ShoppingCartOutlined } from '@ant-design/icons'

const ShoppingCartButton = () => (
    <Wrapper>
        <Content>
            <ShoppingCartOutlined />
            <h3>Cart</h3>
        </Content>
    </Wrapper>
)

export default ShoppingCartButton;