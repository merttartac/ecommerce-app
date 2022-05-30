import styled from "styled-components";

export const Wrapper = styled.div`
    width:100%;
    margin: 0;
    height: auto;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px; */
    border-radius: 0 0 5px 5px;
    border-bottom: #e8e8e8 1px solid;
`;

export const UpperNavigationBar = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    margin: 0;
    display: block;
    text-align: center;

    ul {
        width: 100%;
        height: 100%;
        list-style-type: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
    }

    li {
        margin: 10px;
        color: #9a9a9a;

        :first-child {
            color: #f55e3f;
            font-weight: 600;
        }
    }
`;

export const LowerNavigationBar = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    margin: 0;
    display: block;
    text-align: center;
    border-top: #e8e8e8 1px solid;

    ul {
        width: 100%;
        height: 100%;
        list-style-type: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
    }

    li {
        margin: 10px;
        color: #606060;
        font-weight: 600;
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    max-width: var(--maxWidth);
    display: flex;
    padding: 0 10px 10px;
`;

export const LogoSection = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
    flex-direction: column;

    img {
        width: 100px;
        height: auto;
    }
`;

export const SearchBarSection = styled.div`
    display: flex;
    align-items: center;
    width: 60%;
    padding: 30px 30px 10px 30px;
    position: relative;

    input {
        width: 100%;
        height: 100%;
        border: #a4a4a4 1px solid;
        border-radius: 20px;
        background: #f8f8f8;
        padding: 0 20px;

        ::placeholder {
            color: #a4a4a4;
            font-size: var(--fontSmall);
        }
    }

    span {
        position: absolute;
        right: 50px;
        font-size: var(--fontMed);
    }
`;

export const SettingsSection = styled.div`
    width: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    margin: 0;
    justify-content: space-evenly;
`;