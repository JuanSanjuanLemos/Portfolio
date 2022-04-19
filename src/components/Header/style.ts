import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  max-width: 1160px;

  margin: auto;
  padding: 2.5rem 0;

  border-bottom: 2px solid var(--main-color-200);

  .logo{
    color: var(--blue);
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.22;
  }
  ul{
    list-style: none;
    display: flex;
    gap: 4rem;
    li{
      color: var(--text);
      font-size: 1.125rem;
      line-height: 1.22;
    }
  }
`;