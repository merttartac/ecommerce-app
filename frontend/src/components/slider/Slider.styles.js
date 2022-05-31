import styled from "styled-components";

export const Wrapper = styled.div`
    width: var(--maxWidth);
    height: 440px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Content = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding: 5px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: linear-gradient(90deg, rgba(255,255,255,0) 40%, rgba(1,181,190,1) 68%, rgba(253,177,55,0.7066176812521884) 88%, rgba(245,94,63,0.558158297498687) 100%);
`;

export const Image = styled.div`
    height: 100%;
    width: 40%;

    img {
        height: 100%;
        width: 500px;
        object-fit: scale-down;
    }
`;

export const Description = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 50px 20px;
    text-align: right;

    h4 {
        color: #5e5e5e;
        font-size: var(--fontBig);
    }

    h5 {
        color: #5e5e5e;
        font-size: var(--fontTiny);
    }

    span {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        font-size: 50px;
        font-weight: bolder;
        padding: 50px 10px;
        color: #446c72;
    }
`;

export const SlideThumbnails = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px;
    

    img {
        border: 1px solid #aaaaaa;
        width: 50px;
        height: 50px;
        margin: 2px;
        padding: 2px;
        opacity: 0.5;
    }
`;
