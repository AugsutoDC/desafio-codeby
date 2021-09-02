import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    &:not(:last-child) {
        margin-bottom: 1.5rem;
    }

    img {
        width: 7rem;
        height: 7rem;
        border: 1px solid var(--grey);

        margin-right: 2rem;
    }

    div {
        margin-top: 0.5rem;

        small {
            color: var(--grey);
            text-decoration: line-through;

            display: block;
        }

        p {
            font-weight: 700;
            margin-bottom: 0.2rem;
        }
    }
`;