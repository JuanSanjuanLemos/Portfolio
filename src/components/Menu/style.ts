import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  color: var(--text);

  &.button-close {
    font-size: 1.7rem;
    line-height: 1;
  }
`;

export const Container = styled.nav`
  position: absolute;
  bottom: 5px;
  left: 1rem;

  display: flex;
  align-items: flex-end;
  gap: 1rem;

  margin: 0 auto;
  .ul-sm {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    li {
      color: var(--text);
      font-size: 1.125rem;
    }
    .button-theme{
      height: 2rem;
      width: 2rem;
    }
  }
`;
