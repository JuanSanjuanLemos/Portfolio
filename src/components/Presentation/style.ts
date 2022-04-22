import styled from "styled-components";

export const Container = styled.section`
  background-image: url('/images/bg-image.svg');
  background-repeat: no-repeat;
  background-position: 100% -0;
  background-color: var(--main-color);
  max-width: 1440px;

  margin: auto;
  padding: 9.5rem 1rem 13rem;

  .presentation-content{
    max-width: 1160px;
    margin: auto;
    .wrapper-texts{
      font-weight: 600;
      line-height: 1.2;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      h2{
      font-size: 1.5rem;
      color: var(--text);
      }
      span{
        font-size: 4rem;
        color: var(--blue);
        line-height: 1.1;
      }
    }
    .wrapper-buttons{
      display: flex;
      gap: 1.5rem;
      margin-top: 3.75rem;
    }
  }

  @media (max-width: 768px) {
    .presentation-content .wrapper-texts{
      gap: 0;
    }
  }
`;