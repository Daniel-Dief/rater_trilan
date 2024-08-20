import styled from "styled-components";

export const HeaderContainer = styled.header `
    width: 100%;
    box-sizing: border-box;
    height: 96px;
    padding: 24px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 600px){
        height: 135.44px;
        padding: 24px 16px 16px 16px;
        gap: 24px;
        flex-direction: column;
        align-items: center;
    }
`

export const LogoImg = styled.img`
    width: 128px;
    height: 34.88px;
    cursor: pointer;
`

export const FilterCamp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const SearchCamp = styled.div`
    background-color: #191919;
    width: 317px;
    height: 48px;
    border-radius: 99px;
    padding: 4px;
    gap: 8px;
    display: flex;
    align-items: center;
`

export const LensDiv = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 99px;
    background-color: #232323;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    width: 20px;
    height: 20px;
`

export const InputSearch = styled.input`
    width: 261px;
    height: 19px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19.36px;
    border: none;
    background-color: #191919;
    color: #FFFFFF;
    outline: none;
`

export const SlicersDiv = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 99px;
    background-color: #191919;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const EmptyDiv = styled.div`
    width: 128px;
    height: 48px;
`

export const DivTop = styled.div`
    width: 377px;
    height: 48px;
    gap: 12px;
    display: flex;
    align-items: center;
`

export const DivFloat = styled.div `
    position: absolute;
    z-index: 1;
    top: 100px;

    @media screen and (max-width: 600px) {
        top: 150px;
    }
`