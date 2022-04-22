import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: auto;
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
        color: var(--text);
        font-size: 1.125rem;
        line-height: 1.22;
      }
    }
  }
`;
