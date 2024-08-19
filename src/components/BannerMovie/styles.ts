import styled from "styled-components";

interface MovieProps {
    background: string
}

export const BannerBox = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0px 24px 24px 24px;
    gap: 12px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 600px) {
        margin-top: 24px;
    }
`

export const Movie = styled.div<MovieProps>`
    background-image: 
        linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
        url(${props => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: auto;
    width: 90%;
    height: 476px;
    padding: 48px 48px 12px 48px;
    gap: 12px;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;

    @media screen and (max-width: 600px){
        width: 100%;
        box-sizing: border-box;
        height: 200px;
    }
`

export const TrailerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    width: 184px;
    height: 30px;
    border-radius: 12px;
    padding: 12px;
    gap: 8px;
    background-color: #FFFFFF66;
    border: none;
    color: #FFFFFF;
    box-shadow: 0px 0px 12px 0px #00000040;

    @media screen and (max-width: 600px){
        width: 100%;
        padding: 8px;
        gap: 8px;
        border-radius: 12px;
        opacity: 0px;
    }
`

export const Icon = styled.img`
    width: 20px;
    height: 20px;
    padding: 2.5px 3.33px 2.5px 5px;
`

export const Genres = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
`

export const Info = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: 600px){
        flex-direction: column;
        width: 100%;
    }
`

export const About = styled.div`
    width: calc(100% / 3 * 2);

    @media screen and (max-width: 600px) {
        width: 100%;
        box-sizing: border-box;
    }
`

export const DivTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;

`

export const Title = styled.span`
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 22.4px;
    color: #FFFFFF;

    @media screen and (max-width: 600px){
        font-size: 20px;
    }
`

export const StarsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #B4B4B4;
`

export const Evaluation = styled.span`
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 24.2px;
    text-align: left;
    color: #FFFFFF;
`

export const EvaluationCount = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    text-align: left;
    color: #B4B4B4;
`

export const DivMid = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 24px;
`

export const Value = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.36px;
    text-align: left;
    color: #B4B4B4;
`
export const Label = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    text-align: left;
    color: #EEEEEE;
`

export const Cast = styled.div`
    width: calc(100% / 3);
`

export const CastSession = styled.div`
`

export const LabelTitle = styled.span`
    position: relative;
    border-left: 4px solid transparent;
    padding-left: 12px;
    color: #EEEEEE;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 19.2px;

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