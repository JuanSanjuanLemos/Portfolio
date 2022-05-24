import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--main-color);
  padding: 6.25rem 1rem;

  .content {
    max-width: 1160px;
    margin: auto;
    text-align: center;

    h1 {
      color: var(--text);
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 3.75rem;
    }

    .wrapper-social {
      display: flex;
      justify-content: center;
      gap: 2rem;
      font-size: 4rem;
      margin-bottom: 3.75rem;

      a {
        color: var(--icon);
        transition: filter 0.2s linear;
        &:hover {
          filter: brightness(0.6);
        }
      }
    }
    span {
      display: block;
      color: var(--text-second);
      font-weight: 600;
      font-size: 1.5rem;
      margin-bottom: 3.75rem;
      &:hover {
        color: var(--text);
      }
    }
    button {
      background-color: var(--icon);
      padding: 0 1rem;
      height: 4rem;

      border: none;
      border-radius: 1rem;

      font-weight: 500;
      font-size: 1.3rem;
      color: var(--main-color);

      & > * {
        transition: all 0.2s linear;
      }

      &:hover {
        filter: brightness(0.7);
        transform: scale(1.02);
      }
    }
  }
`;
