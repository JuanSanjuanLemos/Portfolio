import styled, { keyframes } from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  color: var(--text);
`;

const sizeOpen = keyframes`
  from{
    width: 55vh;
  }
  to{
    width: 100vh;
  }
`;

export const Container = styled.header`
  position: relative;
  padding: 0 1rem;
  background-color: var(--main-color);
  .content {
    margin: auto;
    padding: 2.5rem 0;
    max-width: 1160px;
    border-bottom: 2px solid var(--main-color-200);

    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      color: var(--blue);
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.22;
    }
    .ul-md {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 4rem;
      li {
        font-size: 1.125rem;
        line-height: 1.22;
        padding: 0.4rem;
        border-radius: 1rem;
        transition: background 0.2s linear;
        color: var(--text);
        &:hover {
          background-color: var(--hover);
        }
      }
    }
  }
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--main-color);
  z-index: 10;
  animation: ${sizeOpen} 0.15s linear;
  .button-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
  .ul-sm {
    color: var(--text);
    list-style: none;
    font-size: 1.5rem;
    margin: 1rem 1rem;
    li {
      margin-bottom: 1rem;
    }
  }
`;
