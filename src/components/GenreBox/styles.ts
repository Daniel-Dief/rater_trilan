import styled from "styled-components";

interface GenreProps {
    background: string
}

export const GenreContainer = styled.p<GenreProps>`
    margin: 0;
    padding: 4.5px 12px 4.5px 12px;
    border-radius: 99px;
    border: 2px;
    border: 2px solid #313131;
    cursor: pointer;
    background-color: ${props => props.background};
    transition: .3s ease;

    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 14.52px;
    text-align: left;
    color: #B4B4B4;
`