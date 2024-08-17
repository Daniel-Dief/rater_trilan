import styled from "styled-components";

export const Slider = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const Label = styled.p`
    position: relative; /* Adicionado para que o ::before seja posicionado corretamente */
    border-left: 4px solid transparent; /* A borda original será escondida pelo pseudo-elemento */
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
        left: 0; /* Posiciona o pseudo-elemento no início da borda esquerda */
        height: 100%;
        width: 4px; /* Largura da borda */
        background-color: #EEEEEE; /* Cor da borda */
        border-radius: 4px; /* Arredonda todas as bordas do pseudo-elemento */
    }
`;