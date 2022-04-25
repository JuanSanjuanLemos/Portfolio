import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--main-color-200);

  max-width: 1440px;
  margin: auto;
  padding: 6.25rem 1rem;

  .content {
    max-width: 1160px;
    margin: auto;

    h1 {
      color: var(--text);
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 3.75rem;
    }

    .wrapper-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(7rem, 7rem));
      justify-content: space-between;
      gap: 2rem;
    }
  }
`;

export const Card = styled.div`
  border: 2px solid var(--text-second);

  background-image: linear-gradient(var(--main-color), var(--main-color)),
    radial-gradient(circle at top left, transparent, transparent);
  background-origin: border-box;
  background-clip: content-box, border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 7rem;
  width: 7rem;

  font-size: 4.5rem;
  color: var(--text);

  transition: color 0.2s linear;

  &.-pink {
    border-image: linear-gradient(132.33deg, #d24074 -0.67%, #6518b4 102.54%) 1;
  }
  &.-blue {
    border-image: linear-gradient(51.06deg, #9358f7 0.87%, #10d7e2 97.48%) 1;
  }

  &:hover {
    color: var(--hover);
  }
`;
