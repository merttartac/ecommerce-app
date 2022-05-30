import React from 'react'
import { Wrapper, Content } from './SettingsButton.styles';
import { SettingOutlined } from '@ant-design/icons';

const SettingsButton = () => {

    

    return (
        <Wrapper>
            <Content>
                <SettingOutlined />
            </Content>
        </Wrapper>
    )
};

export default SettingsButton;