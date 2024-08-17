import styled from "styled-components";

export const Slider = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media screen and (max-width: 400px) {
        flex-direction: row;
        max-width: 100%;
        overflow-x: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
    
        &::-webkit-scrollbar {
            display: none;
        }
    }

`

export const Label = styled.p`
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
    gap: 12px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
`