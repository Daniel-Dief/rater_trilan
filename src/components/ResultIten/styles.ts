import styled from "styled-components";

export const ItenContainer = styled.div`
    width: 95%;
    margin: auto;
    height: 94px;
    padding: 4px;
    gap: 8px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;

    transition: .4s linear;
    &:hover {
        background-color: #232323;
    }
`

export const Image = styled.img`
    width: 64px;
    height: 86px;
    border-radius: 12px;
    border: 2px solid #3A3A3A;
`

export const Info = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
`

export const DivTop = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.span`
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 16.94px;
    color: #FFFFFF;
`

export const StarsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Icon = styled.img`
    width: 14px;
    height: 14px;
`

export const Evaluation = styled.span`
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 16.94px;
    color: #FFFFFF;
`

export const Summary = styled.div`

`

export const Text = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 500;
    line-height: 12px;
    text-align: left;
    color: #b4b4b4;
`