import React from 'react';
import { Wrapper, Content, LogoSection, SettingsSection, UpperNavigationBar, LowerNavigationBar, SearchBarSection } from './Header.styles';
import ProfileButton from './../profile-button/ProfileButton';
import ShoppingCartButton from '../shopping-cart-button/ShoppingCartButton';
import { SearchOutlined } from '@ant-design/icons';

const Header = () => (
    <Wrapper>
        <UpperNavigationBar>
            <ul>
                <li>Special Offers</li>
                <li>New</li>
                <li>Outlet</li>
                <li>Track Your Orders</li>
                <li>Product Return</li>
                <li>Stores</li>
                <li>Contact</li>
            </ul>
        </UpperNavigationBar>

        <Content>
            <LogoSection>
                <img src='logo.png' alt='main-logo' />
            </LogoSection>

            <SearchBarSection>
                <input type='text' placeholder='Search...' />
                <SearchOutlined />
            </SearchBarSection>

            <SettingsSection>
                <ProfileButton />
                <ShoppingCartButton />
            </SettingsSection>
        </Content>

        <LowerNavigationBar>
            <ul>
                <li>Phone</li>
                <li>Computer</li>
                <li>Electronics</li>
                <li>Camera</li>
                <li>Office</li>
                <li>Fashion</li>
                <li>Accessories</li>
                <li>Sports</li>
                <li>Health</li>
            </ul>
        </LowerNavigationBar>
    </Wrapper>
)

export default Header;