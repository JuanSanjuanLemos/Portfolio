import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--main-color);

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
    }
  }
  
  .grid{
    display: grid;
    grid-template-columns: repeat(2, minmax(292px, 530px));
    justify-content: space-between;
    column-gap: 20px;
    row-gap: 5rem;

    margin-top: 3.75rem;
  }

  @media (max-width: 768px) {
    .grid{
      grid-template-columns: repeat(1, minmax(292px, 530px)) ;
      justify-content: center;
    }
  }
`;

export const Card = styled.article`
  .project-image{
    max-width: 100%;
    position: relative;
    margin-bottom: 2.5rem;
    border-radius: 4px 0px 0px 4px;
    border-left: 4px solid var(--blue);
    padding-bottom: 47%;
    img{
      object-fit: fill;
    }
  }
  h2{
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
    color: var(--text);

    margin-bottom: 1.875rem;

  }
  .description{
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.625;
    color: var(--text-second);
    text-align: justify;

    margin-bottom: 1.625rem;

    max-width: 430px;
  }
  .technologies{
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.71;
    color: var(--blue);

    margin-bottom: 2rem;

    max-width: 430px;

  }

  .wrapper-button{
    display: flex;
    gap: 2rem;
  }
  
`;
