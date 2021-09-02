import styled from "styled-components";

export const Container = styled.main`
    .produtos {
        padding: 1.5rem;
        border-bottom: 1.5px solid var(--grey);
    }

    .totais {
        padding: 1.5rem;

        .total-geral {
            display: flex;
            justify-content: space-between;

            font-weight: 700;
            font-size: 1.563rem;
        } 
        
        .totalizers {
            display: flex;
            justify-content: space-between;

            font-weight: 600;
            font-size: 1rem;
        }

        .frete-gratis {
            display: flex;
            justify-content: center;

            padding: 0.625rem;
            margin: 1.5rem 1.5rem 0.5rem;
            font-size: 1.25rem;

            border-radius: 50px;

            background: var(--green-light);
            color: var(--green);
                        
        }
    }
`;

