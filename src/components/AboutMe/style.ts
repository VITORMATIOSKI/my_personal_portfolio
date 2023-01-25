import styled from 'styled-components'

export const ContainerMyAbout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 4rem;

  .content_perfil {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      border: 6px solid ${({ theme }) => theme.colors.primary};
    }

    h1 {
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.textColor};
      padding: 1rem 0;
    }
  }

  .container_perfil {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 400px;
    height: 600px;
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  .content_icons {
    padding: 1.5rem 0;
    a {
      margin-left: 3rem;
    }

    svg {
      width: 70px;
      height: 70px;
      color: ${({ theme }) => theme.colors.icon};
    }
  }

  .content_about {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 6rem;

    h1 {
      font-size: 2rem;
      font-weight: 700;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.textColor};
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.textColor};
      padding: 1rem 0;
    }

    p {
      text-align: center;
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.8;
      color: ${({ theme }) => theme.colors.textColor};
    }

    .complement_content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 1rem;

      svg {
        width: 50px;
        height: 50px;
        color: ${({ theme }) => theme.colors.textColor};
        transition: transform 0.6s ease-in-out;
        margin-left: 1rem;
      }

      svg:hover {
        transform: scale(1.1);
        color: ${({ theme }) => theme.colors.secondary};
      }

      .principal_content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
      }
    }
  }

  @media (max-width: 1440px) {
    .content_perfil {
      img {
        width: 200px;
        height: 200px;
      }

      h1 {
        font-size: 1.5rem;
      }
    }

    .container_perfil {
      width: 350px;
      height: 550px;
    }
  }

  @media (max-width: 1024px) {
    .content_perfil {
      width: 40%;
      img {
        width: 200px;
        height: 200px;
      }

      h1 {
        font-size: 1.5rem;
      }
    }

    .container_perfil {
      width: 350px;
      height: 550px;
    }

    .content_about {
      width: 60%;
      margin-right: 1rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
