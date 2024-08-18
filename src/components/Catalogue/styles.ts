import styled from "styled-components"

export const CatalogueContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 12px;
`

export const Label = styled.p`
    position: relative;
    border-left: 4px solid transparent;
    padding-left: 12px;
    color: #EEEEEE;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 28.8px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 4px;
        background-color: #EEEEEE;
        border-radius: 4px;
    }
`

export const Grid = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

export const Navigators = styled.div`
    width: 100%;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.36px;
    text-align: left;
    color: #EEEEEE;
    display: flex;
    justify-content: flex-end;
    gap: 12px;
`

export const Buttons = styled.div`
    gap: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavButton = styled.img`
    cursor: pointer;
`