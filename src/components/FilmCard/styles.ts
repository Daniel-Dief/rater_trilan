import styled from "styled-components";

interface CardMovieProps {
    background: string;
}

export const CardMovie = styled.div<CardMovieProps>`
    background-image: 
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
        url(${props => props.background});
    width: 350px;
    height: 253.67px;
    margin: auto;
    border-radius: 24px;
    padding: 12px;
    gap: 12px;
    color: #FFFFFF;
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
`

export const StarsBox = styled.div`
    width: 60px;
    height: 32px;
    border-radius: 8px;
    padding: 4px;
    gap: 12px;
    background-color: #FFFFFF66;
    display: flex;
    align-items: center;
`

export const Icon = styled.img`
    width: 20px;
    height: 20px;
`

export const Title = styled.span`
    width: 100%;
    height: 23px;
`

export const TrailerButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    width: 184px;
    height: 40px;
    border-radius: 12px;
    padding: 12px;
    gap: 8px;
    background-color: #FFFFFF66;
    border: none;
    color: #FFFFFF;
    box-shadow: 0px 0px 12px 0px #00000040;
`

export const DivBottom = styled.div`
    position: relative;
    bottom: 0;
`