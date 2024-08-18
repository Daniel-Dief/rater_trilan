import styled from "styled-components";

export const BiographyContainer = styled.div`
    width: 33%;
    height: auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    @media screen and (max-width: 600px){
        width: 90%;
        margin: 24px auto;
    }
`

export const PerfilImg = styled.img`
    width: 95%;
    height: 350px;
    border-radius: 24px;
    border: 4px solid #3A3A3A;
`

export const NameLabel = styled.h2`
    width: 400px;
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-weight: 600;
    line-height: 28.8px;
    text-align: left;
    color: #FFFFFF;
`

export const Session = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`

export const Label = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    color: #EEEEEE;
    margin: 8px 0 5px 0;
`

export const Value = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    color: #B4B4B4;
    margin: 0;
`
