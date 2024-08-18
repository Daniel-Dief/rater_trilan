import styled from "styled-components";

export const SliderBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-direction: row;
    width: 95vw;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const Title = styled.p`
    position: relative;
    border-left: 4px solid transparent;
    padding-left: 12px;
    color: #EEEEEE;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 28.8px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 4px;
        background-color: #EEEEEE;
        border-radius: 4px;
    }
`;

export const Container = styled.div`
    width: 95%;
    margin: auto;
    gap: 12px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
`

export const ScrollButtonBox = styled.div`
    width: 72px;
    gap: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
        visibility: hidden;
    }
`

export const ScrollButton = styled.img`
    cursor: pointer;
`
export const DivTop = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`