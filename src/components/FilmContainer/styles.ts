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
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
        url(${props => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: end;
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
`

export const InHighlightLabel = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: #EEEEEE;
`

export const Icon = styled.img`
    width: 20px;
    height: 20px;
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
`

export const Details = styled.div`
    width: auto;
    height: 24px;
    gap: 24px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #B4B4B4;
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