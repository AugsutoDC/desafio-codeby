import styled from "styled-components";

export const Container = styled.footer`
    border-radius: 0 0 1.25rem 1.25rem;
    border-top: 1.5px solid var(--grey);

    display: flex;
    justify-content: center;

    padding: 1.5rem;

    button {
        font-size: 1.563rem;
        font-weight: 600;
        color: #FFF;
        background: var(--blue);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.5rem;
        height: 4.5rem;
        width: 100%;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;