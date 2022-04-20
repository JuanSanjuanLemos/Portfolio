import styled from "styled-components";

const button = `
  position:relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 9.56rem;
  height: 2.81rem;

  background-color: transparent;

  border: double 2px transparent;
  border-radius: 4px;

  background-image: linear-gradient(var(--main-color), var(--main-color)), radial-gradient(circle at top left, transparent, transparent);
  background-origin: border-box;
  background-clip: content-box, border-box;

  font-size: 1rem;
  font-weight: 600;
  line-height: 1.18;
  color: var(--text);
`;

export const ButtonPink = styled.button`
  ${button};
  border-image: linear-gradient(
    132.33deg,
    #d24074 -0.67%,
    #6518b4 102.54%
  ) 1;
`;

export const ButtonBlue = styled.button`
  ${button};
  border-image: linear-gradient(51.06deg, #9358f7 0.87%, #10d7e2 97.48%) 1;
`;
