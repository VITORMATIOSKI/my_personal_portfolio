import styled from 'styled-components'

export const ContenteHomePage = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 4rem;

  .Text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;

    h1 {
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 3.5rem;
      line-height: 1.6;
      color: ${({ theme }) => theme.colors.textColor};
      padding-bottom: 2rem;
    }

    .text_dev {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      margin-bottom: 2rem;
    }

    h2 {
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 2.5rem;
      line-height: 1.6;
      color: ${({ theme }) => theme.colors.textColor};
    }

    .type_name {
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 2.5rem;
      line-height: 1.6;
      color: ${({ theme }) => theme.colors.primary};
    }

    p {
      text-align: center;
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.6;
      color: ${({ theme }) => theme.colors.textColor};
    }

    span {
      font-size: 0.75rem;
    }

    button {
      width: 200px;
      height: 60px;
      text-align: center;
      background-color: ${({ theme }) => theme.colors.backgroundColor};
      border: 2px solid ${({ theme }) => theme.colors.primary};
      border-radius: 8px;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.textColor};
    }

    button:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;

    .Text {
      h1 {
        font-size: 2rem;
      }

      .type_name {
        font-size: 1rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 425px) {
    .content_gif {
      overflow: hidden;
    }

    .Text {
      .type_name {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 390px) {
    .content_gif {
      overflow: hidden;
    }
  }

  @media (max-width: 375px) {
    .Text {
      p {
        font-size: 0.75rem;
      }

      span {
        font-size: 0.75rem;
      }
    }
  }
`
