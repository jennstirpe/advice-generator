import styled from "styled-components";

export const StyledBtn = styled.button`
    background-color: ${({theme}) => theme.colors.accent};
    height: 4.25rem;
    width: 4.25rem;
    border-radius: 50%;
    border: none;
    padding-top: .25rem;
    box-shadow: none;
    transition: box-shadow 250ms ease-out;

    position: absolute;
    bottom: -2rem;
    right: 9.4rem;

    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 30px ${({theme}) => theme.colors.accent};
    }


    @media(min-width: 1440px) {
        right: 15.5rem;
    }
`