import styled from "styled-components";

interface ContainerProps {
    background: string;
}

export const Container = styled.div<ContainerProps>`
    width: 1000px;
    height: 826px;
    border-radius: 24px;
    padding: 48px;
    gap: 12px;   
    background-image: 
        linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
        url(${props => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: end;

    @media screen and (max-width: 600px){
        width: 343px;
        height: 284px;
        padding: 12px;
        gap: 6px;
        border-radius: 24px;
        opacity: 0px;
    }
`

export const InHighlight = styled.div`
    width: 167px;
    height: 30px;
    border-radius: 8px;
    padding: 8px;
    gap: 4px;
    background-color: #FFFFFF66;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 600px) {
        width: 32px;
        height: 32px;
        padding: 4px;
        gap: 4px;
        border-radius: 8px;
    }
`

export const InHighlightLabel = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: #EEEEEE;
    
    @media screen and (max-width: 600px) {
        display: none;
    }
`

export const Title = styled.span`
    width: 100%;
    font-family: 'Inter', sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 48.41px;
    color: #EEEEEE;
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

export const Synopsis = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 22.4px;
    text-align: left;
    width: 550px;
    color: #EEEEEE;

    @media screen and (max-width: 600px) {
        max-width: 100%;
        max-height: 50px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
`

export const Details = styled.div`
    width: auto;
    height: 24px;
    gap: 24px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #B4B4B4;
    
    @media screen and (max-width: 600px) {
        display: none;
    }
`

export const Stars = styled.div`
    width: auto;
    height: 24px;
    gap: 4px;
    gap: 8px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const DetailsFilm = styled.div`
    gap: 8px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    overflow: hidden;
    overflow-wrap: none;
`

export const Genres = styled.p`
    max-width: 312px;
    height: 19px;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.36px;
    text-align: left;
    color: #B4B4B4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const StarsTop = styled.div`
    width: 60px;
    height: 32px;
    border-radius: 8px;
    padding: 4px;
    gap: 12px;
    background-color: #FFFFFF66;
    display: none;
    align-items: center;
    color: #EEEEEE;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 24.2px;
    text-align: left;


    @media screen and (max-width: 600px) {
        display: flex;
    }
`

export const DivTop = styled.div`
    height: 32px;
    gap: 6px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`