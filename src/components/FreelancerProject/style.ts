import styled from 'styled-components'

export const ContainerCards = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;

  h1 {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.colors.textColor};
    padding: 2rem 0;
  }

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  .content_container {
    width: 50%;
    justify-content: columns;
    margin-top: 1.5rem;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 8px;
  }

  .content_image {
    width: 30%;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      width: 200px;
      height: 200px;
    }
  }

  .content_information {
    width: 50%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      color: ${({ theme }) => theme.colors.textColor};
      text-transform: uppercase;
      font-weight: 700;
      font-size: 2rem;
    }

    p {
      text-align: center;
      color: ${({ theme }) => theme.colors.textColor};
    }
  }

  .content_language {
    margin-top: 1rem;

    svg {
      width: 60px;
      height: 60px;
      color: ${({ theme }) => theme.colors.textColor};
      margin-left: 1rem;
      margin-bottom: 1rem;
    }
  }
`
