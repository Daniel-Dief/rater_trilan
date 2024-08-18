import styled from "styled-components";

export const ActorContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
`

export const Main = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: space-between;
    
    @media screen and (max-width: 600px){
        width: 100%;
        margin: auto;
        flex-direction: column;
        box-sizing: border-box;
    }
`