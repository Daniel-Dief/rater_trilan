import styled from "styled-components";

interface CardPeopleProps {
    background: string;
}

export const CardPeople = styled.div<CardPeopleProps>`
    background-image: 
        linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), 
        url(${props => props.background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 268.8px;
    height: 253.67px;
    gap: 12px;
    border-radius: 24px;
    padding: 12px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    cursor: pointer;
    transition: .2s ease;

    &:hover{
        background-image: 
        linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
        url(${props => props.background});
    }
`

export const Name = styled.span`
    width: 144px;
    color: #EEEEEE;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 22.4px;
`

export const Age = styled.p`
    width: 17px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 22.4px;
`