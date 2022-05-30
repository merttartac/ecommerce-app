import React from 'react'
import { Wrapper, Content } from './ProfileButton.styles';
import { UserOutlined } from '@ant-design/icons'

const ProfileButton = () => (
    <Wrapper>
        <Content>
        <UserOutlined/>
            <h3>Mert Tartac</h3>
        </Content>
    </Wrapper>
)

export default ProfileButton;