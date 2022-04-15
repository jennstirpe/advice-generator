import styled from "styled-components";

export const StyledQuote = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1 {
        color: ${({theme}) => theme.colors.accent};
        font-size: .75rem;
        text-transform: uppercase;
        letter-spacing: .2rem;
    }

    p {
        max-height: 13rem;
        color: ${({theme}) => theme.colors.quoteText};;
        font-size: 1.65rem;
        line-height: 2.25rem;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items:center;
    }

    #desktop-divider {
        display: none;
    }

    .divider {
        margin-bottom: 2rem;
    }


    @media(min-width: 1440px) {

        h1 {
            font-size: .83rem;
        }

        p {
            font-size: 2rem;
            line-height: 2.85rem;
        }

        .divider {
            margin-bottom: 3.25rem;
        }

        #desktop-divider {
            display: block;
        }

        #mobile-divider {
            display: none;
        }
    }

`