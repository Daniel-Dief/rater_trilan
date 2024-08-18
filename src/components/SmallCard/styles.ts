import styled from "styled-components"

interface ImageProps {
    background: string;
}

export const SmallCardBox = styled.div`
    width: 318.67px;
    height: 94px;
    padding: 4px;
    gap: 8px;
    border-radius: 16px;
    display: flex;
`

export const Image = styled.div<ImageProps>`
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 64px;
    height: 90%;
    border-radius: 24px;
    border: 2px solid #3A3A3A;
`

export const Info = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Title = styled.span`
    color: #FFFFFF;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 16.94px;
    text-align: left;
`

export const StarsBox = styled.div`
    width: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Icon = styled.img`
    width: 20px;
    height: 20px;
`

export const Label = styled.p`
    color: #B4B4B4;
    font-family: Inter;
    font-size: 13px;
    font-weight: 500;
    line-height: 12px;
    text-align: left;
    margin: 0;
`