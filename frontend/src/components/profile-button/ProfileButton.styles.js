import styled from "styled-components";

export const Wrapper = styled.div`
    border-radius: 50px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
    background: #f55e3f;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;

    span {
        color: var(--white);
        font-size: var(--fontMed);
        padding: 0 2px;
    }

    h3 {
        font-size: var(--fontSmall);
        margin: 0;
        font-weight: 600;
        color: var(--white);
        padding: 0 2px;
    }
`;