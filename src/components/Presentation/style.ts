import styled, { keyframes } from "styled-components";

const opacity = keyframes`
  0%{
    opacity: 0;
    margin-top: 70vh;
  }
  60%{
    margin-top: 0vh;
  }
  100%{
    opacity: 1;
  }
`;

const transform = keyframes`
  0%{
    background-position-y: 0px;
  }
  50%{
    background-position-y: 1.6rem;

  }
  100%{
    background-position-y: 0px; 
  }
`;

export const Container = styled.section`
  background-color: var(--main-color);
  .box-image{
    background-image: url("/images/bg-image.svg");
    background-repeat: no-repeat;
    background-position: 100% -0;
    max-width: 1440px;
    animation: ${transform} 4s linear infinite;
    margin: auto;
    padding: 9.5rem 1rem 13rem;
    
      .presentation-content {
        max-width: 1160px;
        margin: auto;
        animation: ${opacity} 1.5s ease-in-out ;
        .wrapper-texts {
          font-weight: 600;
          line-height: 1.2;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          h2 {
            font-size: 1.5rem;
            color: var(--text);
          }
          span {
            font-size: 4rem;
            color: var(--blue);
            line-height: 1.1;
          }
        }
        .wrapper-buttons {
          display: flex;
          gap: 1.5rem;
          margin-top: 3.75rem;
        }
      }

      @media (max-width: 768px) {
        .presentation-content .wrapper-texts {
          gap: 0;
        }
      }
  }
`;
