import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--main-color-200);

  max-width: 1440px;
  margin: auto;
  padding: 6.25rem 1rem;

  .content {
    max-width: 1160px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 3rem;

    .imageProfile {
      height: 20.4rem;
      width: 20.4rem;
      border-left: 4px solid var(--blue);
      border-radius: 4px 0px 0px 4px;
      position: relative;
    }

    article {
      max-width: 33rem;
      line-height: 1.2;
      h1 {
        font-size: 1.5rem;
        color: var(--text);
        font-weight: 600;
        margin-bottom: 2.5rem;
      }
      h2 {
        font-size: 1.25rem;
        color: var(--text);
        font-weight: 500;
        margin-bottom: 1.4rem;
      }
      p {
        font-size: 1.125rem;
        color: var(--text-second);
        font-weight: 300;
        text-align: justify;
        margin-bottom: 2rem;
      }
      ul {
        list-style: none;

        color: var(--blue);
        font-size: 1.375rem;
        display: flex;
        gap: 2rem;

        margin-bottom: 2.625rem;
        li {
          &:hover {
            filter: brightness(0.6);
          }
        }
      }
      .wrapper-buttons {
        display: flex;
        gap: 3rem;
      }
    }
  }

  @media (max-width: 576px) {
    .content article .wrapper-buttons{
      gap: 2rem;
    }
  }
  @media (max-width: 992px) {
    .content{
      justify-content: center;
    }
  }
`;
