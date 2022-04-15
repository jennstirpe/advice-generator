import styled from "styled-components";

export const StyledCard = styled.main`
    max-height: 24rem;
    width: 23rem;
    background-color: ${({theme}) => theme.colors.bgCard};
    border-radius: 1rem;
    text-align: center;
    padding: 1.5rem;
    position: relative;

    @media(min-width: 1440px) {
        max-height: 24rem;
        width: 35rem;
    }
`