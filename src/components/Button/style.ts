import styled from "styled-components";

export const ButtonLink = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.7rem 0.8rem;

  background-color: transparent;

  border: double 2px transparent;
  border-radius: 4px;

  background-image: linear-gradient(var(--main-color), var(--main-color)),
    radial-gradient(circle at top left, transparent, transparent);
  background-origin: border-box;
  background-clip: content-box, border-box;

  font-size: 1rem;
  font-weight: 600;
  line-height: 1.18;
  color: var(--text);
  transition: color 0.2s linear;
  span {
    font-size: 1.5rem;
    height: 1.5rem;
    width: 1.5rem;
    font-weight: 600;
    line-height: 1;
  }
  &.-button-pink {
    border-image: linear-gradient(132.33deg, #d24074 -0.67%, #6518b4 102.54%) 1;
  }

  &.-button-blue {
    border-image: linear-gradient(51.06deg, #9358f7 0.87%, #10d7e2 97.48%) 1;
  }

  &:hover {
    color: var(--hover);
  }
`;
