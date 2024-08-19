import styled from "styled-components";

export const ResultContainer = styled.div`
    width: 377px;
    height: 251px;
    padding: 12px;
    gap: 12px;
    border-radius: 24px;
    background-color: #191919;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const Title = styled.span`
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: #EEEEEE;
`

export const List = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`
