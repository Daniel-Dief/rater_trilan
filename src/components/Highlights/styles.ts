import styled from "styled-components";

export const HighlightsContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    height: auto;
    padding: 0 24px 24px 24px;
    gap: 12px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 400px){
        padding: 16px 16px 0px 16px;
        gap: 24px;
        flex-direction: column;
        align-items: center;
    }
`