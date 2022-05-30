import styled from "styled-components";

export const Wrapper = styled.div`
    width: 278px;
    height: 425px;
    padding: 3px;
    margin: 15px 10px;
    border: solid #c3c3c3 1px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Image = styled.div`
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
    padding: 30px;

    img {
        width: auto;
        height: 100%;
    }
`;

export const Content = styled.div`
    height: 40%;
    display: block;
    border-radius: 10px;
    width: 100%;
    margin: 0;
    padding: 0 30px;

    h5 {
        font-weight: 100;
    }

    h6 {
        margin: 10px 0;
        font-weight: 100;
        color: #7e7e7e;
    }

    h2 {
        color: #242661;
    }
`;

export const Thumbnail = styled.image``;