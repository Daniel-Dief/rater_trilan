import styled from "styled-components";

export const SlicersContainer = styled.div`
    display: flex;
    gap: 24px;
    justify-content: center;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const FiltersContainer = styled.div`
    width: 377px;
    padding: 12px;
    border-radius: 24px;
    background-color: #191919;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`

export const Session = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    padding: 8px;
`

export const Title = styled.span`
    margin-bottom: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 14.52px;
    text-align: left;
    color: #EEEEEE;
`

export const Genres = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
    flex-wrap: wrap;
    overflow: hidden;
    max-height: 80px;
`

export const Label = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 14.52px;
    text-align: left;
    color: #6E6E6E;
`

export const Dates = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

export const Date = styled.div`
    width: 164.5px;
    height: 48px;
    padding: 8px;
    gap: 8px;
    border-radius: 12px;
    background-color: #232323;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const InputDate = styled.input`
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.94px;
    background-color: #232323;
    border: none;
    color: #b4b4b4;
    width: calc(100% / 3 * 2);

    &::-webkit-calendar-picker-indicator {
        display: none;
    }
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`

export const Icon = styled.img``

export const Divider = styled.div`
    width: 95%;
    height: 2px;
    border-radius: 99px;
    background-color: #3A3A3A;
`